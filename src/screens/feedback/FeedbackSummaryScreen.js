import React from "react";
import { SafeAreaView, Text, StyleSheet, Button, TextInput, View } from "react-native";

const GeneralFeedbackScreen = props => {
  let {feedback1, feedback2, entry} = props.route.params;
  return <SafeAreaView style={styles.SafeAreaContainer}>
    <View style={styles.container}>
        <Text style={styles.title}>Feedback Summary</Text>
        <Text style={styles.text}>What: {feedback1}</Text>
        <Text style={styles.text}>Why: {feedback2}</Text>
        {entry? <Text style={styles.text}>Location: {entry.location.city}</Text> : null}
        <Text style={styles.title}>Contact Info</Text>
        <TextInput
          placeholder={'Full Name'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Email'}
          style={styles.input}
        />
        <Text style={styles.title}>Comments</Text>
        <TextInput
          placeholder={'What\'s on your mind'}
          multiline={true}
          style={styles.input}
        />
    </View>
    <Button
      title="Submit Feedback"
      onPress = {() => {
          props.navigation.reset({
              index: 0,
              routes:[{name: 'Feedback1'}],
            });
          props.navigation.navigate("Home");
        }}
    />
  </SafeAreaView>
}

export default GeneralFeedbackScreen;

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  container: {
    flexDirection: 'column',
    marginHorizontal: 20,
  },
  input: {
    fontSize: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginVertical: 10,
},
  title: {
    fontWeight: 'bold',
    fontSize: 25,
    marginVertical: 10,
  },
  text: {
    fontSize: 20,
  },
});