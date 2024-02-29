def hello(name, lang):
    greetings = {
        "English": "Hello",
        "Spanish": "Hola",
        "German": "Hallo",
        "French": "Bonjour",
    }
    msg= f"{greetings[lang]} {name}!"

    print(msg)

if __name__ == "__main__":
    import argparse

    # Parse the argument from command line
    parser = argparse.ArgumentParser(
        description="Provides a personal greeting."
    )
    parser.add_argument(
        "-n", "--name", metavar="name",
        required=True, help="The name of the person to greet."
    )
    parser.add_argument(
        "-l", "--lang", metavar="language",
        required=True, choices=["English", "Spanish", "German", "French"],
        help="The language of the greeting."
    )
    args = parser.parse_args()

    # Make the greeting message
    hello(args.name, args.lang)