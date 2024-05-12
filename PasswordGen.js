import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function PasswordGen({ navigation }) {
    const [password, setPassword] = useState('');

    const makeid = (length) => {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        let counter = 0;
        while (counter < length) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
            counter += 1;
        }
        return result;
    }

    const handleGeneratePassword = () => {
        const generatedPassword = makeid(12);
        setPassword(generatedPassword);
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Test Screen</Text>
            <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
            <Button title="Generate Password" onPress={handleGeneratePassword} />
            <Text selectable={true} > {password}</Text>
        </View>
    );
}
