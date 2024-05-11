import { StyleSheet, Text, View, Button } from 'react-native';
export default function App({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Test Screen</Text>
<Button title="Go to Login" onPress={() => navigation.navigate('Login')} /></View>
);
}