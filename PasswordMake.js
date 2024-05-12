import {
    StyleSheet, Text, View, SafeAreaView, Keyboard, TextInput, Button, } from "react-native";
    import React, { useState } from "react";
    export default function index() {
    const [Type, setType] = useState("");
    const [ShortName, setShortName] = useState("");
    const [Website, setWebsite] = useState("");
    const [RequiredUsername, setRequiredUsername] = useState("");
    const [UsedPassword, setUsedPassword] = useState("");
    const handleSubmit = () => {
        const formData = new FormData();
        formData.append("Type", Type);
        formData.append("ShortName", ShortName);
        formData.append("Website", Website);
        formData.append("RequiredUsername", RequiredUsername);
        formData.append("UsedPassword", UsedPassword);
        fetch("http://localhost/PasswordDBConnection/sendPasswords.php", {
        method: "POST", body: formData, })
        .then((response) => {
        if (!response.ok) {
        throw new Error("Network response was not ok");
        }
        return response.json();
        })
        .then((data) => {
        if(data){
        alert("Data saved successfully")
        }
        })
        .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        });
        setType("");
        setShortName("");
        setWebsite("");
        setRequiredUsername("");
        setUsedPassword("");
    };
    return (
    <SafeAreaView style={styles.container}>
    <View style={styles.content}>

    <View style={styles.inputRow}>
    <Text style={styles.label}>Type:</Text>
    <TextInput
    style={styles.input}
    placeholder="Type" value={Type}
    onChangeText={(text) => setType(text)}
    />
    </View>
    
    <View style={styles.inputRow}>
    <Text style={styles.label}>ShortName:</Text>
    <TextInput
    style={styles.input}
    placeholder="ShortName" value={ShortName}
    onChangeText={(text) => setShortName(text)}
    />
    </View>

    <View style={styles.inputRow}>
    <Text style={styles.label}>Website:</Text>
    <TextInput
    style={styles.input}
    placeholder="Website" value={Website}
    onChangeText={(text) => setWebsite(text)}
    />
    </View>

    <View style={styles.inputRow}>
    <Text style={styles.label}>RequiredUsername:</Text>
    <TextInput
    style={styles.input}
    value={RequiredUsername}
    onChangeText={(text) => setRequiredUsername(text)}
    />
    </View>

    <View style={styles.inputRow}>
    <Text style={styles.label}>UsedPassword:</Text>
    <TextInput
    style={styles.input}
    value={UsedPassword}
    onChangeText={(text) => setUsedPassword(text)}
    />
    </View>

    <Button title="Submit" onPress={handleSubmit} />
    </View>
    </SafeAreaView>
    );
    }
    const styles = StyleSheet.create({
    container: {
    flex: 1, backgroundColor: "#f6f9cd", },content: {
    flex: 1, padding: 24, },
    inputRow: {
    marginBottom: 10, },
    label: {
    fontSize: 16, },
    input: {
    height: 40, borderColor: "gray", borderWidth: 1, paddingHorizontal: 10, backgroundColor: "#ffffff", },button: {
    backgroundColor: "blue", padding: 10,
    borderRadius: 10, alignItems: "center", }, });