import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen/SplashScreen.js';
import LoginScreen from './screens/LoginScreen/LoginScreen.js';

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
      screenOptions={{headerShown: false}}
      >
        <Stack.Screen
          name="Home"
          component={SplashScreen}
        />
      <Stack.Screen
          name="Login"
          component={LoginScreen}
        />        
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default App;