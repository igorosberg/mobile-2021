import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function BaseScreen(props) {
    return (
      <Stack.Navigator>
        <Stack.Screen name={props.name} children={() => props.children} options={{
          headerLeftContainerStyle: { paddingLeft: 20 },
          headerRightContainerStyle: { paddingRight: 20 },
          headerLeft: () => <Ionicons
            name="menu-outline"
            size={25}
            color="#000"
            onPress={() => props.navigation.openDrawer()}
          />,
          headerRight: () => <Ionicons
            name="exit-outline"
            size={25}
            color="#000"
            onPress={() => props.navigation.navigate('Opening')}
          />,
        }} />
      </Stack.Navigator>
    )
  }
  
  function HomeScreen({ navigation }) {
    return <BaseScreen
      navigation={navigation}
      name={"Home"}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          onPress={() => navigation.navigate('Notifications')}
          title="Go to notifications"
        />
      </View>
    </BaseScreen>
  }
  
  function NotificationsScreen({ navigation }) {
    return <BaseScreen
      navigation={navigation}
      name={"Notifications"}>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button onPress={() => navigation.goBack()} title="Go back home" />
      </View>
    </BaseScreen>
  }

export default function DrawerScreen() {
    return <Drawer.Navigator
        initialRouteName="Home">
        <Drawer.Screen
        options={{
            drawerIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />
        }}
        name="Home"
        component={HomeScreen} />
        <Drawer.Screen
        options={{
            drawerIcon: ({ color, size }) => <Ionicons name="notifications-outline" color={color} size={size} />
        }}
        name="Notifications"
        component={NotificationsScreen} />
    </Drawer.Navigator>
};