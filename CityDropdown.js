import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
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
        
        if (city.all) {
            onSelect(cities);
        }
        else {
            onSelect([city]);
        }
        
    };

    const dropDownListSelections = [ { name: 'Näytä kaikki kaupungit', all: true }, ...cities];

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
                { dropDownListSelections.map((city) => (
                    <TouchableOpacity key={city.name} onPress={() => handleCitySelect(city)}>
                        <Text style={styles.selectCityText}>{city.name}</Text>
                    </TouchableOpacity>
                ))}
            </View> )}
        </View>
    );
  };


export default CityDropdown;
