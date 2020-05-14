import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SplashScreen from './containers/Splash/Splash';
import Home from './containers/Home/Home.container';
import Landing from './containers/Landing/Landing';

const RootStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
    },
    Landing: {
      screen: Landing,
    },
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'none',
  },
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
