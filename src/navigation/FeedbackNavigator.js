import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import Feedback1Screen from '../screens/feedback/Feedback1Screen';
import Feedback2Screen from '../screens/feedback/Feedback2Screen';
import Feedback3Screen from '../screens/feedback/Feedback3Screen';
import SpecificLocationScreen from '../screens/feedback/SpecificLocationScreen';
import FeedbackSummaryScreen from '../screens/feedback/FeedbackSummaryScreen';
const Stack = createStackNavigator();

const FeedbackNavigator = props => (
    <Stack.Navigator
        initialRouteName="Feedback1"
        screenOptions = {{
            headerBackTitleVisible: false,
            title: 'Feedback',
        }}
    >
        <Stack.Screen name="Feedback1" component={Feedback1Screen}/>
        <Stack.Screen name="Feedback2" component={Feedback2Screen}/>
        <Stack.Screen name="Feedback3" component={Feedback3Screen}/>
        <Stack.Screen name="Specific Location" component={SpecificLocationScreen}/>
        <Stack.Screen name="Feedback Summary" component={FeedbackSummaryScreen}/>
    </Stack.Navigator>
);

export default FeedbackNavigator;