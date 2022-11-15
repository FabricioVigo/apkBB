import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import DrawerMenu from '../routes/Drawer';
import AddClient from '../screens/AddClient'
import AddProduct from '../screens/AddProduct';

const Stack = createNativeStackNavigator();



export default function Navigate() {
  return (
<NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen name='Drawer' options={{headerShown:false}} component={ DrawerMenu } />
      <Stack.Screen name='AddClient' component={ AddClient } />
      <Stack.Screen name='AddProduct' component={ AddProduct } />



      </Stack.Navigator>


</NavigationContainer>
  );

  }