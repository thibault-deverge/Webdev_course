# Define value
value = 1

# Simple while loop with break
# while value <= 10:
#     print(value)
#     if value == 5:
#         break
#     value += 1

# Simple while loop with continue
# The else occurs at the end of the loop only if no break
# while value <= 10:
#     value += 1
#     if value == 5:
#         continue
#     print(value)
# else:
#     print("Value is now equal to " + str(value))

#----------------------------------------------------
names = ["Dave", "Sara", "John"]

# FOR LOOPS
# for x in names:
#     print(x)

# for x in "Mississippi":
#     print(x)

# for x in names:
#     if x == "Sara":
#         break
#     print(x)

# for x in range(4):
#     print(x)

# for x in range(2, 4):
#     print(x)

# for x in range(0, 100, 15):
#     print(x)
# else:
#     print("Glad that\'s over")

#------------------------------------------------------
# NESTED LOOPS
names = ["Dave", "Sara", "John"]
actions = ["codes", "eats", "sleeps"]

for name in names:
    for action in actions:
        print(name + " " + action + ".")