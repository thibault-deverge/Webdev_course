import random
import sys

def guess_my_number(name='johnDoe'):
    game_count = 0
    player_wins = 0

    def play_guess_my_number():
        nonlocal name
        nonlocal game_count
        nonlocal player_wins

        # Ask user for his choice
        player_choice = input(f"{name}, please enter 1, 2, or 3.\n")
        if player_choice not in ['1','2','3']:
            return play_guess_my_number()
        
        # Make random choice for computer
        computer_choice = random.choice("123")

        # Logic of the game
        print(f"\n{name}, you chose {player_choice}.")
        print(f"I was thinking about number {computer_choice}.")

        if player_choice == computer_choice:
            print(f"{name}, you win ! congratulation !")
            player_wins += 1
        else:
            print(f"Sorry {name} but you loose this time.")
        game_count +=1

        # Print game statistics
        print(f"\nGame count: {game_count}")
        print(f"{name} win\'s: {player_wins}")
        print(f"Percentage victory: {(player_wins / game_count) * 100:.2f}%")
        
        # Ask to redo the game
        print(f"\nPlay again, {name}?")
        while True:
            play_again = input("Y for Yes or Q to quit: ")
            if play_again.lower() not in ['y', 'q']:
                continue
            else:
                break
        
        if play_again.lower() == 'y':
            return play_guess_my_number()
        else:
            print(f"Thank you for playing {name}.")
            if __name__ == "__main__":
                sys.exit("Bye")
            else:
                return
    
    return play_guess_my_number

# Execute game only if main module
if __name__ == "__main__":
    import argparse

    parser = argparse.ArgumentParser(
        description="Provide a personal game experience."
    )

    parser.add_argument(
        "-n", "--name", metavar="name", required=True,
        help="The name of the person playing the game."
    )

    args = parser.parse_args()
    guess_number = guess_my_number(args.name)
    guess_number()