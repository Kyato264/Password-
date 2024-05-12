import {StyleSheet} from 'react-native'

export default StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        },
        box: {
          borderWidth: 1,
          borderColor: 'grey',
          padding: 20,
          borderRadius: 10,
        },
        title: {
          fontSize: 24,
          fontWeight: 'bold',
          marginBottom: 20,
        },
        loginInfo: {
          marginBottom: 10,
          padding: 10,
          borderColor: 'gray',
          borderWidth: 1,
          borderRadius: 10,
        },
        plainText: {
          color: 'gray',
          fontSize: 20,
        },
        button: {
          backgroundColor: 'blue',
          padding: 10,
          marginBottom: 20,
          alignItems: 'center',
          borderRadius: 5,
        },
        buttonText: {
          color: 'white',
          fontSize: 18,
        },
      });