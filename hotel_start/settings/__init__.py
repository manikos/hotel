from .base import *

try:
    from .local import *
    LIVE = False
except ImportError:
    LIVE = True


if LIVE:
    try:
        from .production import *
    except ImportError:
        pass