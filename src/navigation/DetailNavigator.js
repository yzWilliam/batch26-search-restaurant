import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from '../screens/DetailsScreen';

const Stack = createStackNavigator();

const DetailNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Details" component={DetailsScreen}/>
    </Stack.Navigator>

);

export default DetailNavigator;