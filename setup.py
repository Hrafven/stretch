import setuptools

with open("README.md", "r") as fh:
    long_description = fh.read()

setuptools.setup(
    name="stretch",
    version="0.0.1",
    author="Hugo 'Hrafven' Bidois",
    author_email="hrafven@gmail.com",
    description="Stretch app",
    long_description=long_description,
    long_description_content_type="text/markdown",
    url="https://github.com/hrafven/stretch",
    packages=setuptools.find_packages(),
    classifiers=[
        "Programming Language :: Python :: 3",
        "License :: OSI Approved :: MIT License",
        "Operating System :: OS Independent",
    ],
    python_requires='>=3.9',
)
