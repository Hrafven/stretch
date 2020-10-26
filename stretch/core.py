import io
import threading
import tkinter as tk
from tkinter import ttk

import pystray
from PIL import Image, ImageTk

import stretch.content_manager as content_manager


class StretchApp(tk.Frame):
    """
    docstring
    """

    def __init__(self, master=None):
        """
        docstring
        """
        super().__init__(master)
        self.master = master
        self.after_id = None
        icon_data = content_manager.get_resource(
            'stretch.resources', 'tray_icon.ico')
        self.image = Image.open(io.BytesIO(icon_data))
        self.menu = (pystray.MenuItem('Quit', lambda: self.quit_window()),
                     pystray.MenuItem('Show', lambda: self.show_window(), default=True))
        self.master.iconphoto(False, ImageTk.PhotoImage(self.image))
        self.progressbar = ttk.Progressbar(
            orient=tk.HORIZONTAL, length=250, mode='determinate', value=0)
        self.progressbar.pack(fill="none", expand=True)
        self.pack()

    def quit_window(self):
        """
        docstring
        """
        self.icon.stop()
        self.master.destroy()

    def show_window(self):
        """
        docstring
        """
        self.icon.stop()
        self.master.after(0, self.master.deiconify)
        self.progressbar["value"] = 0
        self.progressbar["maximum"] = 1500
        self.update_progressbar()

    def withdraw_window(self):
        if self.after_id is not None:
            self.after_cancel(self.after_id)
        self.master.withdraw()
        self.icon = pystray.Icon("name", self.image, "Stretch",
                                 self.menu if pystray.Icon.HAS_MENU else None)
        timer = threading.Timer(900.0, lambda: self.show_window())
        timer.start()
        self.icon.run()

    def update_progressbar(self):
        """
        docstring
        """
        self.progressbar.step(15)
        if self.progressbar["value"] + 15 >= 1500:
            self.withdraw_window()
        else:
            self.after_id = self.after(100, self.update_progressbar)


def run():
    root = tk.Tk()
    root.title("StretchApp")
    root.wm_attributes("-topmost", 1)
    screen_width = root.winfo_screenwidth()
    screen_height = root.winfo_screenheight()
    root.geometry("550x250+%d+%d" % (screen_width/2-275, screen_height/2-125))
    root.configure()

    stretch = StretchApp(master=root)
    stretch.master.protocol('WM_DELETE_WINDOW', stretch.withdraw_window)

    stretch.mainloop()
