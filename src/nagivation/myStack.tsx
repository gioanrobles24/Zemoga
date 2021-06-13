import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/homeScreen/home'
import DetailScreen from '../screens/detailScreen/details'

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detais" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default MyStack