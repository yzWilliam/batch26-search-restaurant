import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const Feedback2Screen = props => {
  return <SafeAreaView style={styles.container}>
    <Text>Is this about a sepecific location?</Text>
    <Button
      title="General Feedback"
      onPress = {()=> props.navigation.navigate("General Feedback", {
          feedback1: props.route.params.feedback1,
          feedback2: props.route.params.feedback2,
        })}
    />
    <Button
      title="Specific Location"
    />
  </SafeAreaView>
}

export default Feedback2Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});