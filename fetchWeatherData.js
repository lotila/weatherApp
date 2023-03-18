import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import  API_KEY from './apikey';
import WeatherIcon from './showIcon';
import styles from './styles';


function FetchWeatherData ({ city })
{
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const language = "fi";

    // fetch data
    useEffect(() => {
        const fetchWeatherData = async () => {
        try {
            const response = await fetch( 
                `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${API_KEY}&lang=${language}`);
            const data = await response.json();
            setWeatherData(data);
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
                        <Text style={styles.temperatureText}>{parseInt(weatherData.main.temp)} {String.fromCodePoint(8451)}</Text>)}
                </View>
            </View>
            
            {/*päiväys, tuuli ja kosteus*/}
            <View style={styles.specificWeatherDataContainer}>
                <View style={styles.cityNameContainer}>
                    {isLoading ? ( <Text>Lataa...</Text> ) : (
                        <Text style={styles.dateText}>{new Date(weatherData.dt*1000).toLocaleString('default', { month: 'short'})} 
                        {addSuffix(new Date(weatherData.dt*1000).getDate())}</Text> )}
                    {isLoading ? ( <Text>Lataa...</Text> ) : (
                        <Text style={styles.timeText}>{new Date(weatherData.dt*1000).getHours().toString().padStart(2, '0')}:
                        {new Date(weatherData.dt*1000).getMinutes().toString().padStart(2, '0')}</Text> )}
                </View>
                <View style={styles.cityNameContainer}>
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherExtaInfo}>Tuuli: {weatherData.wind.speed} m/s</Text>)}
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherExtaInfo}>Humidity: {weatherData.main.humidity} %</Text>)}
                    {isLoading ? ( <Text>Lataa...</Text>) : (
                        <Text style={styles.weatherExtaInfo}>Precipitation: {weatherData.rain?.['1h'] || 0} mm</Text>)}
                    {console.log(weatherData)}
                </View>
            </View>


            {/*sääennustuksia 3h välein 5 kpl*/}
            <View style={styles.weatherForecastsContainer}>
                
            </View>

        </View>
    );
};

export default FetchWeatherData;
