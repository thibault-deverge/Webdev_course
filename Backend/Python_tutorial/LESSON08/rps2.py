import sys
import random
from enum import Enum

class RPS(Enum):
    ROCK = 1
    PAPER = 2
    SCISSORS = 3

play_again = True

while play_again:
    # Ask user for his choice and cast it to int
    player_choice = input("Enter...\n1 for Rock,\n2 for Paper, or\n3 for Scissors:\n")
    player = int(player_choice)

    # Check if player choice is a correct number
    if player < 1 or player > 3:
        sys.exit("You must enter 1, 2, or 3.")
        
    # Make a random choice for computer
    computer_choice = random.choice("123")
    computer = int(computer_choice)

    # Implement logic of game
    print("\nYou chose " + str(RPS(player)).replace('RPS.','') + ".")
    print("Python chose " + str(RPS(computer)).replace('RPS.','') + ".")

    if player == 1 and computer == 3:
        print("You win!")
    elif player == 2 and computer == 1:
        print("You win!")
    elif player == 3 and computer == 2:
        print("You win!")
    elif player == computer:
        print("Tie game!")
    else:
        print("Python win!")

    play_again = input("\nPlay again? \nY for Yes or \nQ to Quit\n")

    if play_again.lower() == "y":
        continue
    else:
        print("Yeaaah")
        print("Thank you for playing!\n")
        play_again = False

sys.exit("Bye and have a nice day")