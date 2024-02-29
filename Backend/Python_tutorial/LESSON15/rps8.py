import sys
import random
from enum import Enum

def rps(name='PlayerOne'):
    game_count = 0
    player_wins = 0
    python_wins = 0

    def play_rps():
        nonlocal name
        nonlocal player_wins
        nonlocal python_wins

        class RPS(Enum):
            ROCK = 1
            PAPER = 2
            SCISSORS = 3

        # Ask user for his choice and cast it to int
        player_choice = input(f"{name}, please enter...\n1 for Rock,\n2 for Paper, or\n3 for Scissors:\n")

        if player_choice not in ["1","2","3"]:
            return play_rps()

        player = int(player_choice)

        # Make a random choice for computer
        computer_choice = random.choice("123")
        computer = int(computer_choice)

        # Implement logic of game
        print(f"\n{name} chose {str(RPS(player)).replace('RPS.','')}.")
        print(f"Python chose {str(RPS(computer)).replace('RPS.','')}.")

        def decide_winner(player, computer):
            nonlocal name
            nonlocal player_wins
            nonlocal python_wins
            if player == 1 and computer == 3:
                player_wins += 1
                return f"{name} win!\n"
            elif player == 2 and computer == 1:
                player_wins += 1
                return f"{name} win!\n"
            elif player == 3 and computer == 2:
                player_wins += 1
                return f"{name} win!\n"
            elif player == computer:
                return "Tie game!\n"
            else:
                python_wins += 1
                return f"Python win!\nSorry, {name}\n"

        game_result = decide_winner(player, computer)
        print(game_result)

        # Update number of games played
        nonlocal game_count
        game_count += 1
        print(f"Game count: {(game_count)}")
        print(f"{name}'s count: {(player_wins)}")
        print(f"Python count: {(python_wins)}")

        # Ask to redo the game
        print("\nPlay again, {name}?")
        while True:
            play_again = input("\nY for Yes or Q to Quit\n")
            if play_again.lower() not in ["y", "q"]:
                continue
            else:
                break

        if play_again.lower() == "y":
            print("")
            return play_rps()
        else:
            print("Yeaaah, Thank you for playing!")
            sys.exit(f"Bye {name} and have a nice day")
    
    return play_rps

if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Provides a personal game experience."
    )
    parser.add_argument(
        "-n", "--name", metavar="name",
        required=True, help="The name of the person playing the game."
    )

    args = parser.parse_args()

    rock_paper_scissors = rps(args.name)
    rock_paper_scissors()