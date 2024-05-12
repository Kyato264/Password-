import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UpdateUserDetailsScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      const storedUsername = await AsyncStorage.getItem('username');
      const storedPassword = await AsyncStorage.getItem('password');

      if (storedUsername !== null && storedPassword !== null) {
        setUsername(storedUsername);
        setPassword(storedPassword);
      }
    } catch (error) {
      console.error('Error fetching user details:', error);
      Alert.alert('Error', 'Failed to fetch user details');
    }
  };

  const updateUserDetails = async () => {
    try {
      if (username.trim() === '' || password.trim() === '') {
        Alert.alert('Error', 'Please enter both username and password');
        return;
      }

      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      Alert.alert('Success', 'User details updated successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error updating user details:', error);
      Alert.alert('Error', 'Failed to update user details');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Update User Details</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Update Details" onPress={updateUserDetails} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
