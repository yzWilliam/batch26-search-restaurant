import React, {useState} from "react";
import {SafeAreaView, Text, StyleSheet, View, Button, TextInput,
    TouchableOpacity, } from 'react-native';

const PaymentScreen = (props) => {
    const [showCreditCard, setCreditCardVisiblity] = useState(false);

    return (<SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCreditCardVisiblity(true)}
            >
                <View style={styles.row}>
                    <Text style={styles.text}>Pay by Credit Card</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCreditCardVisiblity(false)}
            >
                <View style={styles.row}>
                    <Text style={styles.text}>Pay by Cash</Text>
                </View>
            </TouchableOpacity>
            {(showCreditCard)? <View>
                <TextInput
                    style={styles.input}
                    placeholder="Country"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Card #"
                />
                <TextInput
                    style={styles.input}
                    placeholder="CVV"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Zip"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Expiry Month (MM)"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Expiry Year (YYYY)"
                />
            </View> :null}
        </View>
        <View style={styles.container}>
            <View style={styles.row}>
                <Text style={styles.text}>Total Due</Text>
                <Text style={styles.text}>$ {props.route.params.total.toFixed(2)}</Text>
            </View>
            <View style={styles.bottomButton}>
                <TouchableOpacity
                    activeOpacity={0.7}
                >
                    <Text style={styles.buttomButtonText}>Continue</Text>
                </TouchableOpacity>
            </View>
        </View>
    </SafeAreaView>);
};

export default PaymentScreen;

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
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
    },
    buttomButtonText:{
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
    bottomButton: {
        alignSelf: 'center',
        marginVertical: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        width: '80%',
        paddingVertical: '3%',
    },
});