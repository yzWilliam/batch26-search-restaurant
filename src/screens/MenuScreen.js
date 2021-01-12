import React from "react";
import { View , Text, StyleSheet, Image } from "react-native";

const MenuScreen =  props => {
  console.log(props);
  console.log(props.route.params.entry);

  const {name, location, email, cell, picture} = props.route.params.entry;

  return <View style={styles.container}>
      <Image source={{ uri : picture.thumbnail}} style={styles.image} />
      <Text> Name: {name.first} {name.last} </Text>
      <Text> Location: {location.city}, {location.state}, {location.country} </Text>
      <Text> Email: {email} </Text>
      <Text> Phone: {cell} </Text>
      </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
});

export default MenuScreen;