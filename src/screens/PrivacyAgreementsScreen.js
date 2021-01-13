import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const PrivacyAgreementsScreen = props => {
  return <SafeAreaView style={styles.container}>
    <Button
      title="User Agreement"
      onPress = {()=> props.navigation.navigate("User Agreement")}
    />
    <Button
      title="Privacy Policy"
      onPress = {()=> props.navigation.navigate("Privacy Policy")}
    />
    <Button
      title="Online Tracking Opt Out Guide"
      onPress = {()=> props.navigation.navigate("Online Tracking Opt Out Guide")}
    />
    <Button
      title="Open Source Licenses"
      onPress = {()=> props.navigation.navigate("Open Source Licenses")}
    />
  </SafeAreaView>
}

export default PrivacyAgreementsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});