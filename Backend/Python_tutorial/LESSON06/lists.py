users = ['Dave', 'John', 'Sara']
data = ['Dave', 42, True]
emptylist = []

# Check type of a list
print(type(data))

# Check if a value in in a list
print("Dave" in emptylist)

# Print value at 'x' index in a list
print(users[0])
print(users[-1])

# To know index of a value
print(users.index('Sara'))

# Return range of values (list) in a list
print(users[0:2])
print(users[1:])
print(users[-3:-1])

# Return len of the list
print(len(data))

# -------- ADD VALUES TO A LIST ---------
# Add value into a list (at the end)
users.append('Elsa')

# Add valueS into a list (at the end)
users += ['Jason', 'Theo']
users.extend(['Robert', 'Jimmy'])
print(users)

# Add value at the beginning/middle of the list (without desctruction)
users.insert(0, 'Bob')
users[2:2] = ['Eddie', 'Alex']
print(users)

# Replace existing values with others (slice)
users[1:3] = ['Robert', "JPJ"]
print(users)

# -------- REMOVE VALUES TO A LIST ---------
# Remove specific value
users.remove('Bob')

# Pop (return that value)
print(users.pop())
print(users)

# Delete at one specific position
del users[0]

# Delete a full list
# del data (use with precaution)
data.clear() #clear all value
print(data)

# --------- OTHER FEATURES -------------
# Sort a list (by default uppercase before lowercase)
users[1:2] = ['dave']
users.sort()
print(users)

# Sort alphabetically without case sensitive
users.sort(key=str.lower)
print(users)

# --------- NUMBER FEATURES -------------
nums = [4,42,78,1,5]

# Reverse the list
nums.reverse()
print(nums)

# Sort in descending order
nums.sort(reverse=True)
print(nums)

# Sort without modifying element
print(sorted(nums, reverse=True))

# Make a copy of the list (3 ways)
numscopy = nums.copy()
mynums = list(nums)
mycopy = nums[:]

# --------- TUPLES -------------
# Similar to list except :
#   - Data in tuples will not change
#   - Order of data will not change
# Most of the things from list apply to tupples

# Create tuples
mytuple = tuple(('Dave', 42, True))
anothertuple = (1,4,2,8,2)

# Check type
print(mytuple)
print(type(anothertuple))

# Modify it by changing it to list and convert back
newlist = list(mytuple)
newlist.append('Neil')
newtuple = tuple(newlist)
print(newtuple)

# Unpacking tuples
(one, *two, hey) = anothertuple
print(one)
print(two)
print(hey)

# Methods on tupples (only index() and count())
print(anothertuple.count(2))