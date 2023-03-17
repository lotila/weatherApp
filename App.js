import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import CityDropdown from './CityDropdown';
import cities from './cities';
import React, { useState } from 'react';
import styles from './styles';
import FetchWeatherData from './fetchWeatherData';





function App() {

  const [selectedCity, setSelectedCity] = useState(null);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };


  return (
    <ScrollView style={styles.backGround}>
      <View style={styles.content}>
        <Text style={styles.title}>Säätutka</Text>
      </View>

      <View style={styles.content}>
        <CityDropdown onSelect={handleCitySelect} />

        <FetchWeatherData city={selectedCity ? selectedCity : cities.at(0)} />    
      </View>
    </ScrollView>
    
  );
}

export default App;