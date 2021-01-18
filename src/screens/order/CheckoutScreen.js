import React from "react";
import {SafeAreaView, Text, StyleSheet, View, Button, TextInput} from 'react-native';

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
        <Button
            title="Continue"
            onPress={() => props.navigation.navigate("Payment", {
                total: props.route.params.total,
            })}
        />
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
        // width: 300,
        // height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
});