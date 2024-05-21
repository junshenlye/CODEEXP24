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
        />        
      </Stack.Navigator>
    </NavigationContainer>  
  );
};

export default App;