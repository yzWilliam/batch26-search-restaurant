import React from "react";
import { SafeAreaView, Text, StyleSheet, Button } from "react-native";

const Feedback2Screen = props => {
  return <SafeAreaView style={styles.container}>
    <Text>What's on your mind?</Text>
    <Button
      title="Compliment"
      onPress = {()=> props.navigation.navigate("Feedback3", {
          feedback1: props.route.params.feedback1,
          feedback2: 'Compliment'
        })}
    />
    <Button
      title="Issue"
      onPress = {()=> props.navigation.navigate("Feedback3", {
          feedback1: props.route.params.feedback1,
          feedback2: 'Issue'
        })}
    />
    <Button
      title="Question"
      onPress = {()=> props.navigation.navigate("Feedback3", {
          feedback1: props.route.params.feedback1,
          feedback2: 'Question'
        })}
    />
    <Button
      title="Suggestion"
      onPress = {()=> props.navigation.navigate("Feedback3", {
          feedback1: props.route.params.feedback1,
          feedback2: 'Suggestion'
        })}
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