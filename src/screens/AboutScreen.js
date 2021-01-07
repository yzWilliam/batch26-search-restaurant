import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const AboutScreen =  props => {
  console.log(props);
  
  return <View style={styles.container}>
      <Text>
          About
      </Text>
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

export default AboutScreen;