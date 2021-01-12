import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen';
import OrderTypeScreen from '../screens/OrderTypeScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import AboutScreen from '../screens/AboutScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={HomeNavigator} />
    <Drawer.Screen name="Login" component={LoginScreen} />
    <Drawer.Screen name="Find Locations" component={OrderTypeScreen} />
    <Drawer.Screen name="Feedback" component={ContactUsScreen} />
    <Drawer.Screen name="Privacy & Agreements" component={AboutScreen} />
  </Drawer.Navigator>
);

export default DrawerNavigator;