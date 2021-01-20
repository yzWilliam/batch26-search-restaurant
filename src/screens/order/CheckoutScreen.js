import React from "react";
import {SafeAreaView, Text, StyleSheet, View, Button, 
    TextInput, TouchableOpacity, } from 'react-native';

const CheckoutScreen = (props) => {
    return (<SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
            <Button 
                title="Login/Sign Up"
                onPress={() => props.navigation.navigate("Login")}
            />
            <Text style={styles.title}>Guest Checkout</Text>
            <TextInput
                style={styles.input}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.input}
                placeholder="Email Address"
            />
        </View>
        <View style={styles.bottomButton}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => props.navigation.navigate("Payment", {
                total: props.route.params.total,
            })}
          >
            <Text style={styles.buttomButtonText}>Continue</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>);
};

export default CheckoutScreen;

const styles = StyleSheet.create({
    safeAreaContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
    },
    container: {
        //alignItems: 'center',
        //justifyContent: 'center',
        marginHorizontal: 20,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 10,
    },
    input: {
        fontSize: 20,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
    },
    buttomButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    bottomButton: {
        alignSelf: 'center',
        marginBottom: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        width: '80%',
        paddingVertical: '3%',
    },
});