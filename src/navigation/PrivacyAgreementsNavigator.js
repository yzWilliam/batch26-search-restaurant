import React from "react";
import { createStackNavigator} from '@react-navigation/stack';
import PrivacyAgreementsScreen from '../screens/privacy-agreements/PrivacyAgreementsScreen';
import UserAgreementScreen from '../screens/privacy-agreements/UserAgreementScreen';
import PrivacyPolicyScreen from '../screens/privacy-agreements/PrivacyPolicyScreen';
import OptOutGuideScreen from '../screens/privacy-agreements/OptOutGuideScreen';
import OpenSourceLicensesScreen from '../screens/privacy-agreements/OpenSourceLicensesScreen';

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