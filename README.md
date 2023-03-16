### Weather Radar
This is a weather radar application that shows the locations of the Etteplan offices listed below weather data for the current day.

## Features
* Displays the following weather information every three hours: Temperature, Wind speed, Humidity (in percent) and Precipitation (in millimeters).
* The locations of the offices involved are Tampere, Jyväskylä, Kuopio and Espoo.
* Weather data is retrieved from the OpenWeatherMap service.
* Uses React to implement the user interface.
* The drop-down menu at the top of the interface is used to select specific city weather information.

## Requiremetns 
* node.js versio 18.14.0
* Git

## Installation
* Clone the repository from GitHub.
* Navigate to the project directory.
* Run npm install to install the necessary dependencies.

## Configuration
* To use the OpenWeatherMap API, you need to sign up for a free account and obtain an API key.
* Once you have obtained the API key, edit apiKey.env file in the root directory of the project.
* In the apiKey.env file, change the following line: REACT_APP_API_KEY=your_api_key_here. Replace your_api_key_here with your actual API key.

## Usage
* Run npm start to start the application.
* On desktop, press w to view the application on the web browser.
* On Android, press a to connect to a device or an emulator (https://docs.expo.dev/workflow/android-studio-emulator).


## Tests
* This application is smoke tested in desktop and android phone environment.

## Credits
* This project was created by Tomi Lotila as a front-end task for Etteplan.