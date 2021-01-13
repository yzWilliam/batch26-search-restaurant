import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const Feedback1Screen = props => {
  return <SafeAreaView style={styles.container}>
    <Text>What is this regarding?</Text>
    <Button
      title="App"
      onPress = {()=> props.navigation.navigate("Feedback2", {feedback1: 'App'})}
    />
    <Button
      title="Food"
      onPress = {()=> props.navigation.navigate("Feedback2", {feedback1: 'Food'})}
    />
    <Button
      title="Service"
      onPress = {()=> props.navigation.navigate("Feedback2", {feedback1: 'Service'})}
    />
    <Button
      title="Other"
      onPress = {()=> props.navigation.navigate("Feedback2", {feedback1: 'Other'})}
    />
  </SafeAreaView>
}

export default Feedback1Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});