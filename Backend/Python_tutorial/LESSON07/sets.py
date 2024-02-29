
# Create a set
nums = { 1, 2, 3, 4 }
nums2 = set((1,2,3,4))

print(nums)
print(nums2)
print(type(nums))
print(type(nums2))

# No duplicate allowed (removed automatically)
nums = { 1, 2, 2, 3, 3}
print(nums)

# Sort the value
# True is a dupe of 1, False is a dupe of zero
nums = {1, True, 2, False, 3, 4, 0}
print(nums) # False, 1, 2, 3, 4

# Check if a value is in a set...
# ... but you cannot refer to an element in the set with an index position or a key
print(2 in nums)

# Add new element to a set
nums.add(8)
print(nums)

# Add elements from one set to another
morenums = { 5, 6, 7 }
nums.update(morenums)
print(nums)

# Merge two sets to create a new set
one = {1, 2, 3}
two = {5, 6, 7}
mynewset = one.union(two)
print(mynewset)

# Keep only the duplicates elements of two sets
one = {1, 2, 3}
two = {2, 3, 4}
one.intersection_update(two)
print(one)

# Keep everything excepts duplicate elements of two sets
one = {1, 2, 3}
two = {2, 3, 4}
one.symmetric_difference_update(two)
print(one)