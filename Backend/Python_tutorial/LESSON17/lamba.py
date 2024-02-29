# --------------- LAMBDAS ---------------
# Lambda = Simple one line function (anonymous function)
# will return the value without specifying it
squared = lambda num : num * num
print(squared(2))

# another simple lambda
addTwo = lambda num : num + 2
print(addTwo(12))

# with two parameters
sum_total = lambda a, b : a + b
print(sum_total(10, 8))

############################################
## Generally use inside another function
## ex : factory function
def funcBuilder(x):
    return lambda num : num + x

addTen = funcBuilder(10)
addTwenty = funcBuilder(20)
print(addTen(7))
print(addTwenty(7))

# --------------- HIGHER ORDER FUNCTION ---------------
# A function that accepts function as argument
numbers = [3,7,12,18,20,21]

# Built in which apply function to every elements
squared_nums = map(lambda num : num * num, numbers)
print(list(squared_nums))

# Another built-in function
odd_nums = list(filter(lambda num : num % 2 != 0, numbers))
print(odd_nums)

# reduce built-in function
from functools import reduce
names = ['Dave Gray', 'Sara Ito', 'John Jacob Jingleheimerschmidt']
char_total = reduce(lambda acc, curr: acc + len(curr), names, 0)
print(char_total)

