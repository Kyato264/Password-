import React, { useState, useEffect } from 'react';
import { StatusBar, StyleSheet, Text, View, TextInput, TouchableOpacity, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PasswordsMain from './PasswordsMain';
import PasswordViewer from './PasswordViewer';
import SetUserDetails from './SetUserDetails';
import UpdUserDetails from './UpdUserDetails';
import PasswordGen from './PasswordGen';
import PasswordMake from './PasswordMake';
import styles from './StyleSheet';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PasswordsMain" component={PasswordsMain} />
        <Stack.Screen name="PasswordViewer" component={PasswordViewer} />
        <Stack.Screen name="SetUserDetails" component={SetUserDetails} />
        <Stack.Screen name="UpdUserDetails" component={UpdUserDetails} />
        <Stack.Screen name="PasswordGen" component={PasswordGen} />
        <Stack.Screen name="PasswordMake" component={PasswordMake}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [userDetailsExist, setUserDetailsExist] = useState(true);

  useEffect(() => {
    checkUserDetails();
  }, []);

  useFocusEffect( 
    React.useCallback(() => {
      checkUserDetails();
    }, [])
  );

  const checkUserDetails = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');
      if (storedUsername) {
        setUsername(storedUsername);
      }
      if (!storedUsername || !storedPassword) {
        setUserDetailsExist(false);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const resetUserDetails = async () => {
    try {
      await AsyncStorage.removeItem('username');
      await AsyncStorage.removeItem('password');
      setUsername('');
      setPassword('');
      setUserDetailsExist(false);
      Alert.alert('Success', 'User details reset successfully');
    } catch (error) {
      console.error('Error resetting user details:', error);
      Alert.alert('Error', 'Failed to reset user details');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const loginAttempt = async () => {
    try {
      const storedPassword = await AsyncStorage.getItem('password');
      if (!storedPassword) {
        Alert.alert(
          'User Details Required',
          'Please set or update your user details before logging in.',
          [
            { text: 'Set Details', onPress: () => navigation.navigate('SetUserDetails') },
            { text: 'Update Details', onPress: () => navigation.navigate('UpdUserDetails') },
          ],
          { cancelable: false }
        );
      } else if (password === storedPassword) {
        navigation.navigate('PasswordsMain');
      } else {
        Alert.alert('Incorrect Password', 'Please enter the correct password.');
      }
    } catch (error) {
      console.error('Error checking password:', error);
      Alert.alert('Error', 'Failed to check password');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.title}>Password Savior Mark 2</Text>
        <StatusBar style="auto" />

        <Text style={styles.plainText}>Username: {username}</Text>

        <Text style={styles.plainText}>Password</Text>
        <TextInput
          style={styles.loginInfo}
          value={password}
          onChangeText={setPassword}
          keyboardType="visible-password"
          secureTextEntry
          onBlur={dismissKeyboard}
        />

        <TouchableOpacity onPress={loginAttempt} style={styles.button}>
          <Text style={styles.buttonText}>OK</Text>
        </TouchableOpacity>

        {!userDetailsExist && (
        <TouchableOpacity onPress={() => navigation.navigate('SetUserDetails')} style={styles.button}>
          <Text style={styles.buttonText}>Set User Details</Text>
        </TouchableOpacity>
      )}
      {/* this button just exists to reset the user details on the login screen, it'll be removed later or you can just remove it now and remember your password*/}
      <TouchableOpacity onPress={resetUserDetails} style={styles.button}>
        <Text style={styles.buttonText}>Reset User Details </Text>
      </TouchableOpacity>
      </View>
    </View>
  );
}

