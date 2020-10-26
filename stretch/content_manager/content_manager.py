import importlib_resources


def get_resource(module: str, name: str) -> str:
    """Load a resource file."""
    return importlib_resources.files(module).joinpath(name).read_bytes()
