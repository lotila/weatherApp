import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';
import WeatherIcon from './showIcon';


const ShowWeatherForecast = ({ weatherforecast }) => {

    return (
        <View style={styles.weatherForecastBox}>
            {/*kello, icon lämpötila*/}
            <View style={styles.weatherForecastBasicInfoContainer}>
                <Text style={styles.weatherForecastTimeText}>{new Date(weatherforecast.dt*1000).getHours().toString().padStart(2, '0')}:
                    {new Date(weatherforecast.dt*1000).getMinutes().toString().padStart(2, '0')}</Text>

                <WeatherIcon iconCode={ weatherforecast.weather[0].icon } />

                <Text style={styles.weatherForecastTemperatureText}>{Math.round(parseFloat(weatherforecast.main.temp))} {String.fromCodePoint(8451)}</Text>
            </View>

            {/*tuuli ja kosteus ja sademäärä*/}
            <View style={styles.weatherForecastExtraInfoContainer}>
                <Text style={styles.weatherForecastExtraInfo}>{weatherforecast.wind.speed} m/s</Text>
                <Text style={styles.weatherForecastExtraInfo}>{weatherforecast.main.humidity} %</Text>
                <Text style={styles.weatherForecastExtraInfo}>{weatherforecast.rain?.['3h'] || 0} mm</Text>
            </View>
        </View>
    );
};

export default ShowWeatherForecast;
   