import React from "react";
import { View , Text, StyleSheet, Button } from "react-native";
import MapView from 'react-native-maps';

const LocationsScreen =  props => {
  console.log(props);
  
  return <MapView
      style={styles.container}
      region={{
        latitude: 37.550201,
        longitude: -121.980827,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421}}
      showsUserLocation={true}
    />
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