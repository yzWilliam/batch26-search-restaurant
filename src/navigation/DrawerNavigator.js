// test only

import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from '../screens/AboutScreen';
import ContactUsScreen from '../screens/ContactUsScreen';
import LocationsScreen from '../screens/LocationsScreen';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';

const StackNav = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen,
    },
    {
        initialRouteName: 'Home'
    }
)
const TabNav = createBottomTabNavigator(
    {
        Home: StackNav, 
        TabA: AboutScreen,
        TabB: ContactUsScreen,
        TabC: LocationsScreen,
        TabD: LoginScreen
    },
    {
        tabBarOptions: {
            activeTintColor: 'red',
            inactiveTintColor: 'blue',
            labelStyle: {
              fontSize: 18,
            },
            style: {
              backgroundColor: 'aliceblue'
            }
          },
    }
)

const SideMenu = props => (
    <ScrollView>
        <TouchableOpacity onPress={() => {
            props.navigation.navigate('Home');
            props.navigation.closeDrawer();
          }
        }>
            <Text>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate('TabA');
            props.navigation.closeDrawer();
          }
        }>
            <Text>About</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate('TabB');
            props.navigation.closeDrawer();
          }
        }>
            <Text>Contact Us</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate('TabC');
            props.navigation.closeDrawer();
          }
        }>
            <Text>Locations</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            props.navigation.navigate('TabD');
            props.navigation.closeDrawer();
          }
        }>
            <Text>Login</Text>
        </TouchableOpacity>
    </ScrollView>
)

const DrawerNavigator = createDrawerNavigator(
    {
        Home: TabNav,
    },
    {
        contentComponent: SideMenu
    }
)