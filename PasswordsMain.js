import { StyleSheet, Text, View, Button } from 'react-native';
export default function PasswordsMain({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Test Screen</Text>
<Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
<Button title="Go to Password Viewer" onPress={() => navigation.navigate('PasswordViewer')} />
<Button title="Go Update User Details" onPress={() => navigation.navigate('UpdUserDetails')} />
<Button title="Go to Generate Password" onPress={() => navigation.navigate('PasswordGen')} />
<Button title="Go to make new Password" onPress={() => navigation.navigate('PasswordMake')}/>
</View>
);
}