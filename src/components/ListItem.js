import React from 'react';
import { Text, StyleSheet, TouchableOpacity, View, Image } from 'react-native';

const ListItem = ( props ) => (
    <TouchableOpacity onPress={() => props.navigation.navigate("Menu", {
            entry: props.entry
        })} activeOpacity={0.7} style={styles.container}>
        <View style={styles.listItem}>
            <Image
              source={{ uri: props.entry.picture.thumbnail }}
              style={styles.coverImage}
            />
            <View style={styles.metaInfo}>
              <Text style={styles.title}>{`${props.entry.name.first} ${
                props.entry.name.last
              }`}</Text>
            </View>
          </View>
    </TouchableOpacity>

);

export default ListItem;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20,
    },
    listItem: {
        marginTop: 10,
        paddingVertical: 20,
        paddingHorizontal: 20,
        backgroundColor: '#fff',
        flexDirection: 'row'
      },
      coverImage: {
        width: 100,
        height: 100,
        borderRadius: 8
      },
      metaInfo: {
        marginLeft: 10
      },
      title: {
        fontSize: 18,
        width: 200,
        padding: 10
      },
});