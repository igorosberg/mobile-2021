import React from "react";

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Produtos from './views/Produtos';
import Produto from './views/Produto';
import Cadastrar from './views/Cadastrar';

const Stack = createStackNavigator();

export default function App(props) {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Produtos"
            component={Produtos}
            options={({navigation}) => ({ title: 'Produtos Esportivos',
              headerRightContainerStyle: { paddingRight: 20 },
              headerRight: () => <Ionicons
                name="add-outline"
                size={25}
                color="#000"
                onPress={() => navigation.navigate('Cadastrar')} />
              })} />
          <Stack.Screen
            name="Produto"
            component={Produto}
            options={{ title: 'Produto Esportivo' }} />
          <Stack.Screen
            name="Cadastrar"
            component={Cadastrar}
            options={{ title: 'Cadastro de produto' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}