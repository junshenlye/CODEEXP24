import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen/loginscreen';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const Stack = createNativeStackNavigator();

/* 
Navigation Stack for React Native Routing
follow template for New Screens created
*/

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
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