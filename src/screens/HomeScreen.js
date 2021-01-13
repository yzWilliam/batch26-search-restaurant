import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const HomeScreen = props => {

  return <SafeAreaView style={styles.container}>
    <Text>Welcome, guest!</Text>
    <Button
      title="Start new order"
      onPress = {()=> props.navigation.navigate("Order Type")}
    />
  </SafeAreaView>
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});