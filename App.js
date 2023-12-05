import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/LoginScreen';
import RegisterScreen from './src/RegisterScreen';
import MainScreen from './src/MainScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Main">

        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        />
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{ headerShown: false }} // Hide the header for this screen
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
