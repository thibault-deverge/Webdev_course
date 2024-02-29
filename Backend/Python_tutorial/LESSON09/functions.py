# Simple definition and call
# def hello_world():
#     print("Hello world!")
# hello_world()

# Simple definition with parameters
# return 0 if not an integer
# def sum(num1 = 0, num2 = 0):
#     if (type(num1) is not int or type(num2) is not int):
#         return 0
#     return(num1 + num2)
# total = sum(7, 2)
# total2 = sum()
# print(total)
# print(total2)

# ------------------------------------
# VARIATIC FUNCTIONS
def multiple_items(*args):
    print(args)
    print(type(args))
multiple_items("Dave", "John", "Sara")
multiple_items("Dave", 5, True)

def mult_named_items(**kwargs):
    print(kwargs)
    print(type(kwargs))
mult_named_items(first = "Dave", last = "Gray")