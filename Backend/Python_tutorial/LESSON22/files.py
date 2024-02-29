import os

# ********** READ **********
# error if it does't exists
# This is also default value without specifying "r"
f = open("names.txt", "r")

# read all file or 'x' first characters
# print(f.read())
# print(f.read(4))

# read line by line the file
print(f.readline())
print(f.readline())
print(f.readline())

# print line by line
for line in f:
    print(line)

# close the file
f.close()

# make an error if file doesn't exists
# try:
#     f = open("doesntexist.txt")
#     print(f.read())
# except:
#     print("The file you want to read doesn't exist")
# finally:
#     f.close()

# ********** APPEND **********
f = open("names.txt", "a")
f.write("Neil\n")
f.close()

f = open("names.txt", "r")
print(f.read())
f.close()

# ********** WRITE (Overwrite) **********
f = open("context.txt", "w")
f.write("I deleted all of the context")
f.close()

f = open("context.txt", "r")
print(f.read())
f.close()

# ***** 2 ways to create a file *****

# Opens a file for writing, creates the file if it does not exist
f = open("name_list.txt", "w")
f.close()

# Creates the specified file, but returns an error if the file exists
if not os.path.exists("dave.txt"):
    f = open("dave.txt", "x")

# Delete a file
if os.path.exists("dave.txt"):
    os.remove("dave.txt")
else:
    print("The file you wish to delete doesn't exist")

with open("more_names.txt") as f:
    content = f.read()

with open("names.txt", "w") as f:
    f.write(content)