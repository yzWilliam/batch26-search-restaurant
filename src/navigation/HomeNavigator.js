import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import DetailNavigator from './DetailNavigator';
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import LoginScreen from '../screens/LoginScreen';

const Drawer = createDrawerNavigator();

const HomeNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={DetailNavigator} />
    <Drawer.Screen name="About" component={AboutScreen} />
    <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
    <Drawer.Screen name="Locations" component={LocationsScreen} />
    <Drawer.Screen name="Login" component={LoginScreen} />
  </Drawer.Navigator>
);

export default HomeNavigator;