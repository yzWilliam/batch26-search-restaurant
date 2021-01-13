import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import PrivacyAgreementsScreen from '../screens/PrivacyAgreementsScreen';
import UserAgreementScreen from '../screens/UserAgreementScreen';
import PrivacyPolicyScreen from '../screens/PrivacyPolicyScreen';
import OptOutGuideScreen from '../screens/OptOutGuideScreen';
import OpenSourceLicensesScreen from '../screens/OpenSourceLicensesScreen';

const Stack = createStackNavigator();

const PrivacyAgreementsNavigator = props => (
    <Stack.Navigator
        initialRouteName="Privacy & Agreements"
    >
        <Stack.Screen name="Privacy & Agreements" component={PrivacyAgreementsScreen}/>
        <Stack.Screen name="User Agreement" component={UserAgreementScreen}/>
        <Stack.Screen name="Privacy Policy" component={PrivacyPolicyScreen}/>
        <Stack.Screen name="Online Tracking Opt Out Guide" component={OptOutGuideScreen}/>
        <Stack.Screen name="Open Source Licenses" component={OpenSourceLicensesScreen}/>
    </Stack.Navigator>
);

export default PrivacyAgreementsNavigator;