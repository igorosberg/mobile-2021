import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import OpeningScreen from './views/screens/OpeningScreen';
import DrawerScreen from './views/screens/DrawerScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Opening" component={OpeningScreen}/>
        <Stack.Screen name="Drawer" component={DrawerScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
