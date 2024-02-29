import requests
from dotenv import load_dotenv
import os

from pprint import pprint
# To print nicely json format
# pprint(weather_data)

load_dotenv()

def get_current_weather():
    # Welcome message
    print('*** Get Current Weather Conditions ***\n')

    # Ask user for input
    city = input("\n Please enter a city name: ")

    # Make request to Weather API
    request_url = f'https://api.openweathermap.org/data/2.5/weather?appid={os.getenv("API_KEY")}&q={city}&units=metric'
    weather_data = requests.get(request_url).json()

    # Display data
    print(f'Current weather for {weather_data["name"]}.')
    print(f'The Temperature is {weather_data["main"]["temp"]} celsius')
    print(f'Feels like {weather_data["main"]["feels_like"]} and {weather_data["weather"][0]["description"]}.')

if __name__ == "__main__":
    get_current_weather()