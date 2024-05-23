import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './src/screens/SplashScreen/SplashScreen.js';
import LoginScreen from './src/screens/LoginScreen/LoginScreen.js';

const Stack = createNativeStackNavigator();

/* 
Root Navigation Stack for React Native Routing
follow template for New Screens created
*/
const slideUpTransition = {
  gestureDirection: 'vertical',
  transitionSpec: {
    open: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
    close: {
      animation: 'timing',
      config: {
        duration: 300,
      },
    },
  },
  cardStyleInterpolator: ({ current, layouts }) => {
    return {
      cardStyle: {
        transform: [
          {
            translateY: current.progress.interpolate({
              inputRange: [0, 1],
              outputRange: [layouts.screen.height, 0],
            }),
          },
        ],
      },
    };
  },
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='SplashScreen'
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
      <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={slideUpTransition}
        />        
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default App;