# Import all module
import sys

# Import part of a module
from math import pi
from enum import Enum
print(pi)

# Import and create an alias
import random as rdm

# Print all things in a module (best way is to check documentation)
# for item in dir(rdm):
#     print(item)

# Import custom module
import kansas
print(kansas.capital)
kansas.randomfunfact()

# One variable every module have automatically is __name__
# It is equal to "__main__" if it is main module
print(__name__)
print(kansas.__name__)

# Import Rock Paper Scissors game
from rps7 import rock_paper_scissors
rock_paper_scissors()