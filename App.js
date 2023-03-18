import { ScrollView, StyleSheet, Text, View, Button } from 'react-native';
import CityDropdown from './CityDropdown';
import cities from './cities';
import React, { useState } from 'react';
import styles from './styles';
import FetchWeatherData from './FetchWeatherData';





function App() {

  const [selectedCity, setSelectedCity] = useState(cities);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };


  return (
    <ScrollView style={styles.topBar}>
      <View style={styles.backGround}>
        <Text style={styles.title}>Säätutka</Text>
      </View>

      <View style={styles.backGround}>
        <CityDropdown onSelect={handleCitySelect} />

        {selectedCity.map((city) => <FetchWeatherData city={city}/>)}  
      </View>
    </ScrollView>
    
  );
}

export default App;