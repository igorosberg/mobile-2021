import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Produtos from './views/Produtos';
import Produto from './views/Produto';

const Stack = createStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={{ title: 'Produtos Esportivos' }} />
          <Stack.Screen
            name="Produto"
            component={Produto}
            options={{ title: 'Produto Esportivo' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}