import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import  API_KEY from './apikey';


function FetchWeatherData ({ city })
{
    const [weatherData, setWeatherData] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWeatherData = async () => {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${city.latitude}&lon=${city.longitude}&units=metric&appid=${API_KEY}`);
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
            console.log(response);
        }
        };
        fetchWeatherData();
    }, [city]);

    return (
        <View>

            {isLoading ? ( <Text>Lataa...</Text>) : (<Text>Temperature: {weatherData.main.temp}</Text>)}
            
        </View>
    );
};

export default FetchWeatherData;
