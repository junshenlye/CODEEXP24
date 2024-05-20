import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen/LoginScreen.js';
import SplashScreen from './screens/SplashScreen/SplashScreen.js';

const Stack = createNativeStackNavigator();

/* 
Navigation Stack for React Native Routing
follow template for New Screens created
*/

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      >
        <Stack.Screen
          name="Home"
          component={SplashScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default App;