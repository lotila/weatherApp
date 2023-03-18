import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import  API_KEY from './apikey';
import WeatherIcon from './showIcon';
import styles from './styles';
import ShowWeatherForecast from './weatherForecastBox'


function FetchWeatherData ({ city })
{
    const [weatherData, setCurrentWeatherData] = useState(null);
    const [weatherForecastData, setForecastWeatherData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const language = "fi";
    const CURRENT_WEATHER_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${API_KEY}&lang=${language}`;
    const FORECAST_WEATHER_URL = `https://api.openweathermap.org/data/2.5/forecast?lat=${city.latitude}&lon=${city.longitude}&appid=${API_KEY}&units=metric`;

    // fetch data
    useEffect(() => {
        const fetchWeatherData = async () => {
        try {
            const [weatherDataTemp, weatherForecastDataTemp] = await Promise.all([
                fetch(CURRENT_WEATHER_URL).then(res => res.json()),
                fetch(FORECAST_WEATHER_URL).then(res => res.json())
            ])
            setCurrentWeatherData(weatherDataTemp);
            setForecastWeatherData(weatherForecastDataTemp);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
        };
        fetchWeatherData();
    }, [city]);

    // liittää päätteen päivään
    function addSuffix(day) {
        if (day === 1 || day === 21 || day === 31) {
          return day + "st";
        } else if (day === 2 || day === 22) {
          return day + "nd";
        } else if (day === 3 || day === 23) {
          return day + "rd";
        } else {
          return day + "th";
        }
    }

    // sääennustuksien kutsut listassa
    const weatherForecastArray = [];
    for (let columnIndex = 0; columnIndex <= 4; columnIndex++) {
        weatherForecastArray.push(
            isLoading ? ( <Text>Lataa...</Text>) : (<ShowWeatherForecast weatherforecast={weatherForecastData.list[columnIndex]}/>));
    }

    return (
        <View>
            {/*kaupunki ja lämpötila*/}
            <View style={styles.cityHeadingContainer}>
                <View style={styles.cityNameContainer}>
                    <Text style={styles.cityName}>{city.name}</Text>
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherDescription}>{weatherData.weather[0].description}</Text>)}
                </View>
                <View style={styles.temperatureContainer}>
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <WeatherIcon iconCode={ weatherData.weather[0].icon } />)}

                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.temperatureText}>{Math.round(parseFloat(weatherData.main.temp))} {String.fromCodePoint(8451)}</Text>)}
                </View>
            </View>
            
            {/*päiväys, tuuli ja kosteus*/}
            <View style={styles.specificWeatherDataContainer}>
                <View style={styles.cityNameContainer}>
                    {isLoading ? ( <Text>Lataa...</Text> ) : (
                        <Text style={styles.dateText}>{new Date(weatherData.dt*1000).toLocaleString('default', { month: 'short'})} 
                        {" "}{addSuffix(new Date(weatherData.dt*1000).getDate())}</Text> )}
                    {isLoading ? ( <Text>Lataa...</Text> ) : (
                        <Text style={styles.timeText}>{new Date(weatherData.dt*1000).getHours().toString().padStart(2, '0')}:
                        {new Date(weatherData.dt*1000).getMinutes().toString().padStart(2, '0')}</Text> )}
                </View>
                <View style={styles.cityNameContainer}>
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherExtaInfo}>Tuuli: {weatherData.wind.speed} m/s</Text>)}
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherExtaInfo}>Kosteus: {weatherData.main.humidity} %</Text>)}
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherExtaInfo}>Sademäärä: {weatherData.rain?.['1h'] || 0} mm</Text>)}
                </View>
            </View>

            {/*sääennustuksia 3h välein 5 kpl*/}
            <View style={styles.weatherForecastsContainer}>
                {weatherForecastArray}
            </View>
        </View>
    );
};

export default FetchWeatherData;
