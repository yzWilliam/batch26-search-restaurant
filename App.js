import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigator from './src/navigation/HomeNavigator';

const AppContainer = () => (
  <NavigationContainer>
    <HomeNavigator/>
  </NavigationContainer>
)

export default AppContainer;