import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";

const LocationsScreen =  props => {
  console.log(props);
  
  return <View style={styles.container}>
      <Text>
          Locations
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

export default LocationsScreen;