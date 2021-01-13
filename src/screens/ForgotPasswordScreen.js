import React from "react";
import { SafeAreaView, TextInput, StyleSheet, Button } from "react-native";

const ForgotPasswordScreen = props => {
  return <SafeAreaView style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Email"
    />
    <Button
      style={styles.input}
      title="Send Reset Email"
    />
  </SafeAreaView>
}

export default ForgotPasswordScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: 250,
    height: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
  },
});