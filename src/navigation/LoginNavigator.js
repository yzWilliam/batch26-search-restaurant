import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

const Stack = createStackNavigator();

const LoginNavigator = props => (
    <Stack.Navigator
        initialRouteName="Login"
    >
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Create Account" component={CreateAccountScreen}/>
        <Stack.Screen name="Forgot Password" component={ForgotPasswordScreen}/>
    </Stack.Navigator>
);

export default LoginNavigator;