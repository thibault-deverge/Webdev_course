person = "Dave"
coins = 3

# ---- Different way of formatting a string -----

# --- CONCATENATION ---
# First method by simple concatenation of string
print("\n" + person + " has " + str(coins) + " coins left.")

# ---- F-STRING ----
# F-string way (like template litteral in js)
message = "%s has %s coins left." % (person, coins)
print(message)

# ---- FORMAT() ----
# Format way simple in same order
message = "{} has {} coins left.".format(person,coins)
print(message)

# Format way with order flipped 
message = "{1} has {0} coins left.".format(coins, person)
print(message)

# Format way with value defined
message = "{person} has {coins} coins left.".format(coins=coins, person=person)
print(message)

# Format message with a dictionnarie
player = {
    'person': 'Dave',
    'coins': 3
}
message = "{person} has {coins} coins left.".format(**player)
print(message)

# ---- MODERN F_STRING WAY (prefered way) ----
# way cleaner
message = f"{person} has {coins} coins left."
print(message)

# can use expression
message = f"{person.lower()} has {2 * 5} coins left."
print(message)

# with a dictionaries
message = f"{player['person']} has {2 * 5} coins left."
print(message)

# you can pass formatting options (see documentation for more examples)
num = 10

print(f"2.25 times {num} is {2.25 * num:.2f}")

for num in range(1, 11):
    print(f"2.25 times {num} is {2.25 * num:.2f}")

for num in range(1, 11):
    print(f"{num} divided by 4.52 is {num / 4.52:.2%}")