import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import HomeScreen from "./src/screens/HomeScreen";
import AboutScreen from './src/screens/AboutScreen';
import ContactUsScreen from './src/screens/ContactUsScreen';
import LocationsScreen from './src/screens/LocationsScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="Locations" component={LocationsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}