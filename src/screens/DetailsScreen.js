import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const DetailsScreen =  props => {
  console.log(props);
  
  return <View style={styles.container}>
      <Text> userId: {props.route.params.userId} </Text>
      <Text> id: {props.route.params.id} </Text>
      <Text> title: {props.route.params.title} </Text>
      <Text> body: {props.route.params.body} </Text>
      </View>
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default DetailsScreen;