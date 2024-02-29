
# ----- GLOBAL SCOPE -----
name = "Dave"
count = 1

# 1. Simple function with parameters
def greeting(name):
    color = "blue"
    print(color)
    print(name)
greeting("John")

# 2. Calling function inside another
def another():
    greeting("Dave")
another()

# 3. Define function inside another (avoid pollute global scope)
def another2():
    color = "blue"
    def greeting2(name):
        nonlocal color
        color = "red"
        print(color)
        print(name)
    greeting2("Dave")
    print(color)
another2()

# 4. Modify a variable from global scope inside a local scope
# Easy to just access the variable but trying to modify it will only change the variable locally and no reflect the change in the global scope
def another3():
    count = 2
    print(count) # print 2
another3()
print(count) # print 1

# Possible to modify it with keyword "global" or "nonlocal"
def another4():
    global count 
    count += 1
    print(count) # print 2
another4()
print(count) # print 2