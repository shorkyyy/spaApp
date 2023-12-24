import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/Screen/LoginScreen';
import RegisterScreen from './src/Screen/RegisterScreen';
import ProductDetailScreen from './src/Screen/ProductDetailScreen';
import MainTabNavigator from './src/Navigation'; // Import the Tab Navigator
import * as NavigationBar from 'expo-navigation-bar';

const Stack = createStackNavigator();

const App = () => {
  NavigationBar.setBackgroundColorAsync("#f2fbfd");
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login" // Set the initial route to Login
        screenOptions={{ headerShown: false }}
      >
        {/* Login Screen */}
        <Stack.Screen
          name="Login"
          component={LoginScreen}
        />

        {/* Register Screen */}
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
        />

        {/* Product Detail Screen */}
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetailScreen}
        />

        {/* Main Tab Navigator Screen */}
        <Stack.Screen
          name="Main"
          component={MainTabNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
