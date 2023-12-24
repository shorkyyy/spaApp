// MainTabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import MainScreen from './Screen/MainScreen';
import AppointmentsScreen from './Screen/AppointmentScreen';
import PurchaseScreen from './Screen/PurchaseScreen';
import ProfileScreen from './Screen/ProfileScreen';
import CustomTabBar from './CustomTabBar';


const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      tabBarOptions={{
        style: {
          backgroundColor: '#ffffff',
        },
        labelStyle: {
          fontSize: 14,
          fontWeight: 'bold',
        },
        activeTintColor: '#90cbc0',
        inactiveTintColor: '#333',
        showLabel: true,
      }}
      tabBar={(props) => <CustomTabBar {...props} />}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Appointments"
        component={AppointmentsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="calendar" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Purchase"
        component={PurchaseScreen}
        options={({ navigation }) => ({
          tabBarIcon: ({ color }) => (
            <Icon name="shopping-cart" size={20} color={color} />
          ),
          tabBarPress: () => {
            navigation.navigate('ProductDetail'); // Navigate to ProductDetailScreen
          },
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="user-alt" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTabNavigator;
