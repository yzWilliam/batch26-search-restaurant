import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableOpacity, Linking, Platform } from 'react-native';

const dialCall = () => {
    let number = '';
    if (Platform.OS === 'ios') {
        number = 'telprompt:${091123456789}';
    } else {
        number = 'tel:${091123456789}';
    }
    Linking.canOpenURL(number)
		.then((supported) => {
			if (supported) {
				return Linking.openURL(number)
					.catch(() => null);
			}
    	});
};

const ContactUsRow = ( {title, input, imageUrl} ) => (
    <View style={styles.container}>
        <TouchableOpacity onPress={dialCall} activeOpacity={0.7}>
            <Image source={{ uri: imageUrl }} style={styles.image} />
        </TouchableOpacity>
        <View style={styles.containerText}>
            <Text style={styles.title}>
                {title}
            </Text>
            <TextInput
                placeholder={input}
                multiline={true}
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
        height: 60,
        width: 60,
    },
});