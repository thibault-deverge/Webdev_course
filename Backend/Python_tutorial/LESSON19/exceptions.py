# Make a custom exception
class JustNotCoolError(Exception):
    pass

# Use some built-in exception and raise a custom one
#   - 'else' is executed if no errors
#   - 'finally' execute no matter if there is error or not
x = 2
try:
    # print(x / 0)
    # if not type(x) is str:
    #     raise TypeError("Only strings are allowed")
    raise JustNotCoolError("i'm a custom exception")
except NameError:
    print('NameError means something is probably undefined')
except ZeroDivisionError:
    print('Please do not divide a number by 0')
except Exception as error:
    print(error)
else:
    print('No errors!')
finally:
    print("I'm going to print with or without an error")