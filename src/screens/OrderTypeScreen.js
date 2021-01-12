import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const OrderTypeScreen = props => {
  return <SafeAreaView style={styles.container}>
    <Text>Order Type</Text>
    <Button
      title="Search for Locations"
      onPress = {()=> props.navigation.navigate("Choose Location")}
    />
  </SafeAreaView>
}

export default OrderTypeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});