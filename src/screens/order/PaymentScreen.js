import React, {useState} from "react";
import {SafeAreaView, Text, StyleSheet, View, Button, TextInput,
    TouchableOpacity, } from 'react-native';

const PaymentScreen = (props) => {
    const [showCreditCard, setCreditCardVisiblity] = useState(false);

    return (<SafeAreaView style={styles.safeAreaContainer}>
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => setCreditCardVisiblity(!showCreditCard)}
            >
                <View style={styles.row}>
                    <Text style={styles.text}>Pay by Credit Card</Text>
                </View>
            </TouchableOpacity>
            <View style={styles.row}>
                <Text style={styles.text}>Pay by Cash</Text>
            </View>
            {(showCreditCard)? <View style={styles.creditCardContainer}>
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
            <Button
                title="Continue"
            />
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
        width: 300,
        height: 40,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 25,
        marginVertical: 10,
    },
    text: {
        fontSize: 20,
    },
    creditCardContainer: {
        flexDirection: 'column', 
        backgroundColor: '#fff',
        marginHorizontal: 20,
        alignItems: 'center',
        marginTop: 50,
    },
});