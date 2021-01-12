import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';

const ListItem = ( props ) => (
    <TouchableOpacity onPress={() => props.navigation.navigate("Details", {
            userId: props.userId,
            id: props.id,
            title: props.title,
            body: props.body,
        })} activeOpacity={0.7} style={styles.container}>
        <Text>userId: {props.userId}</Text>
        <Text>id: {props.id}</Text>
        <Text>title: {props.title}</Text>
        <Text>body: {props.body}</Text>
    </TouchableOpacity>

);

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    }
});