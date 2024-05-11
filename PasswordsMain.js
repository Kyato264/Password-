import { StyleSheet, Text, View, Button } from 'react-native';
export default function App({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Test Screen</Text>
<Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
<Button title="Go to Password Storage" onPress={() => navigation.navigate('PasswordStorage')} />
<Button title="Go Set User Details" onPress={() => navigation.navigate('SetUserDetails')} />
<Button title="Go Update User Details" onPress={() => navigation.navigate('UpdUserDetails')} />
<Button title="Go to Generate Password" onPress={() => navigation.navigate('PasswordGen')} />
</View>
);
}