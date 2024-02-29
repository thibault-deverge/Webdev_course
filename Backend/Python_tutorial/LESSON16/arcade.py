import sys
import argparse
from guess_number import guess_my_number
from rps import rps

def parse_arguments():
    parser = argparse.ArgumentParser(
        description="Provide a personal game experience."
    )
    parser.add_argument(
        "-n", "--name", metavar="name", required=True,
        help="The name of the person playing the game."
    )
    return parser.parse_args()

def play_game(name = 'johnDoe'):
    welcome_back = False

    while True:
        # Welcome back if not first time
        if welcome_back == True:
            print(f"\n{name}, welcome back to the Arcade menu.")
        
        # Save input user
        player_choice = input ("\nPlease choose a game:\n1 = Rock Paper Scissors\n2 = Guess My Number\n\nOr press 'x' to exit the Arcade\n\n")
        if player_choice not in ['1', '2', 'x']:
            return play_game(name)
        welcome_back = True

        # Launch appropriate game
        if player_choice == '1':
            game = rps(name)
        elif player_choice == '2':
            game = guess_my_number(name)
        else:
            print("\nSee you next time!\n")
            sys.exit(f"Bye, {name}!")
        game()

# Launch arcade if run as program
if __name__ == "__main__":
    args = parse_arguments()

    print(f"\n{args.name}, welcome the the arcade!")
    play_game(args.name)