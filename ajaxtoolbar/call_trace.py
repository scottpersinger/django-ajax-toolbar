import sys
import os
import linecache
from threading import local

trace_depth = 0
storage = local()
storage.stack = []

def clear_stack():
    global storage
    storage.stack = []

def call_stack():
    global storage
    return storage.stack

def globaltrace(frame, why, arg):
    global trace_depth
    global storage

    show_modules = ['mirror','lib','api']
    def matches(func):
        parts = func.split(".")
        if len(parts) > 0 and parts[0] in show_modules:
            return True
        else:
            return False

    skip_funcs = ['.decode']

    if not hasattr(storage,'stack'):
        storage.stack = []
    try:
        if why == "call":
            # function call event , extract information
            # Parent frame details
            if frame is None or frame.f_back is None:
                return globaltrace
            p_func = frame.f_back.f_code.co_name
            p_file = frame.f_back.f_code.co_filename
            p_lineinfo = frame.f_back.f_lineno
            p_class = ''
            p_module = ''
            if frame.f_back.f_locals.has_key('self'):
                p_class = frame.f_back.f_locals['self'].__class__.__name__
                p_module = frame.f_back.f_locals['self'].__class__.__module__
            p_func = "%s.%s.%s" % (p_module, p_class, str(p_func))

            # Current frame details
            c_func = frame.f_code.co_name
            c_file = frame.f_code.co_filename
            c_lineinfo = frame.f_lineno
            c_class = ''
            c_module = ''
            if frame.f_locals.has_key('self'):
                c_class = frame.f_locals['self'].__class__.__name__
                c_module = frame.f_locals['self'].__class__.__module__
            c_func = "%s.%s" % (c_class, str(c_func))

            # Order is Caller -> Callee
            if not p_func.endswith("__") and (matches(p_func) or matches(c_func)) and not c_func in skip_funcs:
                if trace_depth < 100:
                    indent = "." * trace_depth
                    msg = '%s' % indent, str(p_func).ljust(20), '----->'.rjust(10) , str(c_func).rjust(10)
                    storage.stack.append("".join(msg))
            trace_depth = trace_depth + 1
        elif why == "return":
            trace_depth = trace_depth - 1
    except Exception:
        pass
    return globaltrace

def enable():
    sys.settrace(globaltrace)

def disable():
    sys.settrace(None)
    clear_stack()
