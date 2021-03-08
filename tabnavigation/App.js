import React, { useEffect, useState } from "react";
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>I am Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>I am Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='home-outline' size={size} color={color} />
          }}
          name="Home"
          component={HomeScreen} />
        <Tab.Screen 
          options={{
            tabBarIcon: ({ color, size }) => <Ionicons name='settings-outline' size={size} color={color} />
          }}
          name="Settings"
          component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}