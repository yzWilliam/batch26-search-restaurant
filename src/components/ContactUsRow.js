import React from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';

const ContactUsRow = ( {title, input, imageUrl} ) => (
    <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.containerText}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TextInput
                placeholder={input}
                style={styles.input}
            />
        </View>
    </View>
);

export default ContactUsRow;

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        color: '#000',
    },
    containerText: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    input: {
        fontSize: 20,
    },
    image: {
        height: 50,
        width: 50,
    },
});