import React from 'react';
import { Image, View } from 'react-native';

const WeatherIcon = ({ iconCode }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  
  return (
    <View>
      <Image source={{ uri: iconUrl }} style={{ width: 50, height: 50 }} />
    </View>
  );
};

export default WeatherIcon;
