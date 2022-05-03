import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactScreen from '../screens/ContactScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import JobScreen from '../screens/JobScreen';


const HomeTabNavigation = () => {
    const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator 
     screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Profile') {
            iconName = focused
              ? 'home'
              : 'home-filled';
          } else if (route.name === 'Contactos') {
            iconName = focused ? 'people' : 'people-outline';
          }else if (route.name === 'Jobs'){
            iconName = focused ? 'work' : 'work-outline';
          }

          // You can return any component that you like here!
          return <MaterialIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
      })}>
      <Tab.Screen name="Profile" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Contactos" component={ContactScreen} />
      <Tab.Screen name="Jobs" component={JobScreen} />
    </Tab.Navigator>
  )
}

export default HomeTabNavigation

const styles = StyleSheet.create({})