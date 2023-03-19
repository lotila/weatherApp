import { ScrollView, Text, View, StatusBar } from 'react-native';
import CityDropdown from './CityDropdown';
import cities from './cities';
import React, { useState } from 'react';
import styles from './styles';
import FetchWeatherData from './fetchWeatherData';


function App() {
  // tulosta alussa koko cities lista
  const [selectedCity, setSelectedCity] = useState(cities);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

  return (
    <ScrollView>
      <StatusBar backgroundColor="#00A5E5" barStyle="light-content" />

      {/*tulosta otsikko*/ }
      <View style={styles.backGround}>
        <Text style={styles.title}>Säätutka</Text>
      </View>

      {/* valinta ja tulosta valitut  */}
      <View style={styles.backGround}>
        <CityDropdown onSelect={handleCitySelect} />
        {selectedCity.map((city) => <FetchWeatherData key={city.name} city={city}/>)}  
      </View>
    </ScrollView>
  );
}

export default App;