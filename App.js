import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from './src/navigation/DrawerNavigator';

const AppContainer = () => (
  <NavigationContainer>
    <DrawerNavigator/>
  </NavigationContainer>
)

export default AppContainer;