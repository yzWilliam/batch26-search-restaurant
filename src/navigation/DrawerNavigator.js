import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import OrderNavigator from './OrderNavigator';
import LoginNavigator from './LoginNavigator';
import OrderTypeScreen from '../screens/order/OrderTypeScreen';
import FeedbackNavigator from "./FeedbackNavigator";
import PrivacyAgreementsNavigator from './PrivacyAgreementsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
  <Drawer.Navigator initialRouteName="Home">
    <Drawer.Screen name="Home" component={OrderNavigator} />
    <Drawer.Screen name="Login" component={LoginNavigator} />
    <Drawer.Screen name="Find Locations" component={OrderTypeScreen} />
    <Drawer.Screen name="Feedback" component={FeedbackNavigator} />
    <Drawer.Screen name="Privacy & Agreements" component={PrivacyAgreementsNavigator} />
  </Drawer.Navigator>
);

export default DrawerNavigator;