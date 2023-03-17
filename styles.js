import { StyleSheet } from 'react-native';




const styles = StyleSheet.create({
    dropDownList: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectedCityText: {
        margin: 10,
        fontWeight: 'bold'
    },
    listCityText:
    {
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 10,
      margin: 16,
      borderWidth: 2, 
      borderColor: 'grey', 
      padding: 16
    },
    content: {
        textAlign: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 50,
        marginBottom: 10
    },
    backGround: {
        backgroundColor: '#00A5E5'
      }
    });


export default styles;