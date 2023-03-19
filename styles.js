import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    backGround: {
        backgroundColor: '#F8F9FA'
    },
    title: {
        fontSize: 23,
        fontFamily: 'Arial',
        color: ' #262626',
        marginBottom: 50,
        textAlign: 'center',
        backgroundColor: '#FFFFFF',
        padding: 30,
    },
    dropDownCityText: {
        fontSize: 13,
        fontFamily: 'Arial',
        color: ' #262626',
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginHorizontal: 50,
        borderWidth: 1, 
        borderColor: '#E6E6E6', 
        margin: 6
    },
    dropDownListTitle: {
        fontSize: 13,
        fontFamily: 'Arial',
        color: ' #262626',
    },
    dropDownList: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 13,
    },
    dropDownListTitleContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        padding: 16,
        marginHorizontal: 50,
        borderWidth: 1, 
        borderColor: '#E6E6E6', 
        justifyContent: 'space-between',
    },
    downArrowMark: {
        fontSize: 15,
    },
    cityDataContainer: {
        marginBottom: 30,
        marginTop: 30,
        marginHorizontal: 50,
        borderWidth: 1, 
        borderColor: '#E6E6E6', 
        padding: 16,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    cityHeadingContainer: {
        flexDirection: 'column',
    },
    cityNameContainer: {
        flexDirection: 'column',
        padding: 10
    },
    cityName: {
        color: '#262626',
        fontSize: 19,
        fontFamily: 'Arial',
    },
    weatherDescription: {
        color: '#70757A',
        fontSize: 13,
        fontFamily: 'Arial',
    },
    temperatureContainer: {
        flexDirection: 'row',
        marginBottom: 10
    },
    temperatureText: {
        color: '#262626',
        fontSize: 26,
        fontFamily: 'Arial',
    },
    specificWeatherDataContainer: {
        flexDirection: 'column',
    },
    dateText: {
        color: '#262626',
        fontSize: 19,
        fontFamily: 'Arial',
    },
    timeText: {
        color: '#70757A',
        fontSize: 13,
        fontFamily: 'Arial',
    },
    weatherExtaInfo: {
        color: '#70757A',
        fontSize: 13,
        fontFamily: 'Arial',
    },
    weatherForecastsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginHorizontal: 50,
        marginBottom: 30
    },
    weatherForecastBox: {
        flexDirection: 'column',
        borderColor: '#E6E6E6',
        borderWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    weatherForecastTimeText:
    {
        color: '#70757A',
        fontSize: 13,
        fontFamily: 'Arial',
        marginTop: 5
    },
    weatherForecastTemperatureText:
    {
        color: '#70757A',
        fontSize: 15,
        fontFamily: 'Arial',
        marginBottom: 10
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
        fontSize: 10,
        fontFamily: 'Arial',
        padding: 2
    }
    });


export default styles;