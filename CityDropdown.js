import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import cities from './cities';
import styles from './styles';

  
function CityDropdown({ onSelect }) 
{
    const [isOpen, setIsOpen] = useState(false);
  
    const handleDropdownToggle = () => {
        setIsOpen(!isOpen);
    };
  
    const handleCitySelect = (city) => {
        setIsOpen(false);
        onSelect(city);
    };


  
    return (
        <View>
            {/*valikko on kiinni*/}
            <TouchableOpacity onPress={handleDropdownToggle}>
                <Text style={styles.selectCityText}>
                    {'Kaikki kaupungit'}
                </Text>
            </TouchableOpacity>

            {/*valikko on auki*/}
            {isOpen && (
            <View style={styles.dropDownList}>
                {cities.map((city) => (
                    <TouchableOpacity key={city.name} onPress={() => handleCitySelect(city)}>
                        <Text style={styles.selectedCityText}>{city.name}</Text>
                    </TouchableOpacity>
                ))}
            </View> )}
        </View>
    );
  };




export default CityDropdown;
