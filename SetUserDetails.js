import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SetUserDetailsScreen({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const saveUserDetails = async () => {
    try {
      if (username.trim() === '' || password.trim() === '') {
        Alert.alert('Error', 'Please enter both username and password');
        return;
      }

      await AsyncStorage.setItem('username', username);
      await AsyncStorage.setItem('password', password);

      Alert.alert('Success', 'User details saved successfully');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving user details:', error);
      Alert.alert('Error', 'Failed to save user details');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Set User Details</Text>
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
      <Button title="Save Details" onPress={saveUserDetails} />
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
