import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView, Button } from 'react-native';


export default function PasswordViewer({navigation}) {
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("http://localhost/PasswordDBConnection/getPasswords.php");
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            const data = await response.json();
            setPasswords(data);
        } catch (error) {
            console.error("There was a problem with the fetch operation:", error);
        }
    };

    const renderPasswordItem = ({ item }) => (
        <View style={styles.card}>
            <Text>Type: {item.Type}</Text>
            <Text>Short Name: {item.ShortName}</Text>
            <Text>Website: {item.Website}</Text>
            <Text>Required Name: {item.RequiredName}</Text>
            <Text>Used Password: {item.UsedPassword}</Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.title}>Password Viewer</Text>
                <FlatList
                    style={styles.list}
                    data={passwords}
                    renderItem={renderPasswordItem}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
            <Button title="Menu" onPress={() => navigation.navigate('PasswordsMain')}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 24,
        backgroundColor: "#ffffff",
    },
    main: {
        flex: 1,
        justifyContent: "center",
        maxWidth: 960,
        marginHorizontal: "auto",
    },
    title: {
        fontSize: 48,
        fontWeight: "bold",
        marginBottom: 20,
    },
    card: {
        padding: 10,
        borderRadius: 10,
        borderColor: "grey",
        borderWidth: 1,
        marginBottom: 10,
        backgroundColor: "white",
    },
    list: {
        flex: 1,
        width: "100%",
        backgroundColor: "#ffffff",
    },
});
