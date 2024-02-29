# ----- DICTIONARIES -----

# Create a dictionaries
band = {
    "vocals": "Plant",
    "guitar": "Page",
}
band2 = dict(vocals="Plant", guitar="Page")

# Print dictionaries, its type and len
print(band)
print(band2)
print(type(band))
print(len(band))

# Access Items
print(band["vocals"]) 
print(band.get("guitar"))

# list all keys/value (return as a list)
print(band.keys())
print(band.values())

# List key/value pairs as tuples for each key/value
print(band.items())

# Verify if a key exists
print("guitar" in band)
print("piano" in band)

# Change values
band["vocals"] = "Coverdale"

# Add new key/value pair
band.update({"bass": "JPJ"})

# Remove items
print(band.pop("bass"))

# Remove item and return tuple key/value pair
band["drum"] = "Bonham"
print(band)
print(band.popitem()) 
print(band)

# Delete and clear
band["drum"] = "Bonham"
del band["drum"]

band2.clear()
print(band2)
del band2

# Copy dictionaries by reference
# band2 = band # create a reference (shallow copy)
# print("Bad copy!")
# print(band2)
# print(band)
# band2["drums"] = "Dave"
# print(band)

# Copy dictionaries (deep copy - prefered)
band2 = band.copy()
band2["drum"] = "Dave"
print("Good copy")
print(band)
print(band2)
print(band == band2)
# or good copy via dict() constructor
band3 = dict(band)

# Nested dictionaries
member1 = {
    "name": "Plant",
    "instrument": "vocals"
}

member2 = {
    "name": "Page",
    "instrument": "Guitar"
}

band = {
    "member1" : member1,
    "member2" : member2
}

print(band)
print(band["member1"]["name"])