from dotenv import load_dotenv
from pprint import pprint
import requests
import os

load_dotenv()

def get_current_weather(city="Angouleme"):
    request_url = f'https://api.openweathermap.org/data/2.5/weather?appid={os.getenv("API_KEY")}&q={city}&units=metric'
    weather_data = requests.get(request_url).json()
    return weather_data

if __name__ == "__main__":
    print('*** Get Current Weather Conditions ***')

    # Get input from user for city and request weather
    city = input("Please enter a city name: ")
    if not bool(city.strip()):
        city = "Angouleme"

    # Request current weather
    weather_data = get_current_weather(city)

    # Display weather
    pprint(weather_data)
