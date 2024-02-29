import math 

# 1. STRING DATA TYPE
# Literal assignment
first = 'dave'
last = 'gray'
# print(type(first))
# print(type(first) == str)
# print(isinstance(first, str))

# Constructor function
# pizza = str("Pepperoni")
# print(type(pizza))
# print(type(pizza) == str)
# print(isinstance(pizza, str))

# Concatenation
# fullname = first + ' ' + last
# fullname += '!'
# print(fullname)

# Casting a number to a string
# decade = str(1980)
# print(type(decade))
# print(decade)
# statement = "I like rock music from the " + decade + "s."
# print(statement)

# Multiple lines
multiline = '''
Hey, how are you ?
I was just checking in.
              all good?
'''
# print(multiline)

# Escaping special characters
# sentence = 'I\'m back at work!\tHey\n\nWhere\'s this at\\located?'
# print(sentence)

# -------------------------------------
# 2. STRING METHODS
# print(first)
# print(first.lower())
# print(first.upper())

# print(multiline.title())
# print(multiline.replace("good", "ok"))
# print(multiline)

# print(len(multiline))
# multiline += "            "
# multiline = "              " + multiline
# print(len(multiline))

# print(len(multiline.strip()))
# print(len(multiline.lstrip()))
# print(len(multiline.rstrip()))

# Build a menu
# title = "menu".upper()
# print(title.center(20, "="))
# print("Coffee".ljust(16, '.') + '$1'.rjust(4))
# print("Muffin".ljust(16, '.') + '$2'.rjust(4))
# print("Cheesecake".ljust(16, '.') + '$4'.rjust(4))
# print("")

# String index menu
# print(first[0])
# print(first[-1])
# print(first[1:]) # from second character to end

# Some methods returns boolean data
# print(first.startswith("D"))
# print(first.endswith("Z"))

# ----------------------------------------------------------
# 3. BOOLEAN DATA TYPE
# myvalue = True
# x = bool(False)
# print(type(x))
# print(isinstance(myvalue, bool))

# ----------------------------------------------------------
# 3. NUMERIC DATA TYPE
# Integer type
price = 100
best_price = int(80)
# print(type(price))
# print(isinstance(best_price, int))

# float type
gpa = 3.28
y = float(1.14)
# print(type(gpa))

# complex type
comp_value = 5 + 3j
# print(type(comp_value))
# print(comp_value.real)
# print(comp_value.imag)

# Built-in functions for numbers
print(abs(gpa))
print(abs(gpa * -1))
print(round(gpa))
print(round(gpa, 1))

# Math library (import at beginning of file)
print(math.pi)
print(math.sqrt(64))
print(math.ceil(gpa))
print(math.floor(gpa))

# Casting a string to a number
zipcode = "10001"
zip_value = int(zipcode)
print(type(zip_value))

# Error if you attempt to cast incorrect data
zip_value = int("123")
