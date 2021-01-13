import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const OpenSourceLicensesScreen = props => {
  return <SafeAreaView style={styles.container}>
    <Text>Open Source Licenses</Text>
  </SafeAreaView>
}

export default OpenSourceLicensesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});