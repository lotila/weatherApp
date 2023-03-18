import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    backGround: {
        backgroundColor: '#ffffff'
    },
    topBar: {
        backgroundColor: '#00A5E5'
      },
      title: {
        fontSize: 23,
        fontFamily: 'arial',
        color: ' #262626',
        marginTop: 50,
        marginBottom: 50,
        textAlign: 'center',
    },
    selectCityText: {
        fontSize: 13,
        fontFamily: 'arial',
        color: ' #262626',
        backgroundColor: '#F8F9FA',
        padding: 16,
        marginHorizontal: 50,
        borderWidth: 1, 
        borderColor: 'grey', 
    },
    dropDownList: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
        fontFamily: 'arial',
        color: ' #262626',
        backgroundColor: '#F8F9FA',
        padding: 10,
        marginHorizontal: 50
    },
    cityHeadingContainer: {
        padding: 50,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    cityNameContainer: {
        flexDirection: 'column',
    },
    cityName: {
        color: '#262626',
        fontSize: 19
    },
    weatherDescription: {
        color: '#70757A',
        fontSize: 13
    },
    temperatureContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    temperatureText: {
        color: '#262626',
        fontSize: 26
    },
    specificWeatherDataContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    dateText: {
        color: '#262626',
        fontSize: 19
    },
    timeText: {
        color: '#70757A',
        fontSize: 13
    },
    weatherExtaInfo: {
        color: '#70757A',
        fontSize: 13
    },
    weatherForecastsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    weatherForecastBox: {
        flexDirection: 'column',
        borderColor: '#E6E6E6',
        borderWidth: 1,
    },
    weatherForecastTimeText:
    {
        color: '#70757A',
        fontSize: 13
    },
    weatherForecastTemperatureText:
    {
        color: '#70757A',
        fontSize: 15
    },
    weatherForecastBasicInfoContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    weatherForecastExtraInfoContainer: {
        flexDirection: 'column',
        backgroundColor: '#E5F6FD',
        alignItems: 'center',
    },
    weatherForecastExtraInfo:
    {
        color: '#70757A',
        fontSize: 10
    }
    });


export default styles;