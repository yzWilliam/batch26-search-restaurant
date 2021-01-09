import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import React from "react";
import HomeScreen from "../screens/HomeScreen";
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import LoginScreen from '../screens/LoginScreen';
import DetailsScreen from '../screens/DetailsScreen';

const Drawer = createDrawerNavigator();

const AppContainer = () => (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Contact Us" component={ContactUsScreen} />
        <Drawer.Screen name="Locations" component={LocationsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        <Drawer.Screen name="Details" component={DetailsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>

)

export default AppContainer;