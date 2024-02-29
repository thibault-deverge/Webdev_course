import sys
import random
from enum import Enum

game_count = 0

def play_rps():
    class RPS(Enum):
        ROCK = 1
        PAPER = 2
        SCISSORS = 3

    # Ask user for his choice and cast it to int
    player_choice = input("Enter...\n1 for Rock,\n2 for Paper, or\n3 for Scissors:\n")

    if player_choice not in ["1","2","3"]:
        print("You must enter 1, 2, or 3.")
        return play_rps()

    player = int(player_choice)

    # Make a random choice for computer
    computer_choice = random.choice("123")
    computer = int(computer_choice)

    # Implement logic of game
    print("\nYou chose " + str(RPS(player)).replace('RPS.','') + ".")
    print("Python chose " + str(RPS(computer)).replace('RPS.','') + ".")

    def decide_winner(player, computer):
        if player == 1 and computer == 3:
            return "You win!"
        elif player == 2 and computer == 1:
            return "You win!"
        elif player == 3 and computer == 2:
            return "You win!"
        elif player == computer:
            return "Tie game!"
        else:
            return "Python win!"

    game_result = decide_winner(player, computer)
    print(game_result)

    # Update number of games played
    global game_count
    game_count += 1
    print("Game count: " + str(game_count))

    # Ask to redo the game
    print("\nPlay again?")
    while True:
        play_again = input("\nY for Yes or Q to Quit\n")
        if play_again.lower() not in ["y", "q"]:
            continue
        else:
            break

    if play_again.lower() == "y":
        return play_rps()
    else:
        print("Yeaaah, Thank you for playing!")
        sys.exit("Bye and have a nice day")

play_rps()