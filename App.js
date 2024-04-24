import React, { useState } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TestScreen from './TestScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="TestScreen" component={TestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  
  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const PasswordRevealCheck = true; 

  const LoginAttempt = () => {
    if (Email === "whatever" && Password === "something") {
      navigation.navigate('TestScreen');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Password Savior Mark 2</Text>
        <StatusBar style="auto" />

        <Text style={styles.plainText}>Email</Text>
        <TextInput style={styles.loginInfo}
          value={Email}
          keyboardType="email-address"
          onChangeText={(text) => setEmail(text)}
        />

        <Text style={styles.plainText}>Password</Text>
        <TextInput style={styles.loginInfo}
          value={Password}
          onChangeText={(text) => setPassword(text)}
          keyboardType="visible-password"
          secureTextEntry={PasswordRevealCheck}
          onBlur={dismissKeyboard}
        />

        <TouchableOpacity onPress={LoginAttempt} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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