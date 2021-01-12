//test only

import { createStackNavigator} from 'react-navigation-stack';
// import { createAppContainer } from 'react-navigation';
import HomeScreen from "../screens/HomeScreen";
import DetailsScreen from '../screens/DetailsScreen';

const HomeNav = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
    },
    {
        initialRouteName: "Home",
        defaultNavigationOptions: {
            title: "Home"
        }
    }
);

// const HomeContainer = createAppContainer(stackNav);

// export default HomeContainer;

export default HomeNav;