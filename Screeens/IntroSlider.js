import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { Button, View, Text } from 'react-native';

// Create four random buttons
const RandomButton1 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Random Button 1" onPress={() => alert('Button 1 Pressed')} />
  </View>
);

const RandomButton2 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Random Button 2" onPress={() => alert('Button 2 Pressed')} />
  </View>
);

const RandomButton3 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Random Button 3" onPress={() => alert('Button 3 Pressed')} />
  </View>
);

const RandomButton4 = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Button title="Random Button 4" onPress={() => alert('Button 4 Pressed')} />
  </View>
);

// Create a stack navigator for each random button
const RandomButton1Stack = () => (
  <View style={{ flex: 1 }}>
    <RandomButton1 />
  </View>
);

const RandomButton2Stack = () => (
  <View style={{ flex: 1 }}>
    <RandomButton2 />
  </View>
);

const RandomButton3Stack = () => (
  <View style={{ flex: 1 }}>
    <RandomButton3 />
  </View>
);

const RandomButton4Stack = () => (
  <View style={{ flex: 1 }}>
    <RandomButton4 />
  </View>
);

// Create a bottom tab navigator
const Tab = createBottomTabNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name="Button 1" component={RandomButton1Stack} />
      <Tab.Screen name="Button 2" component={RandomButton2Stack} />
      <Tab.Screen name="Button 3" component={RandomButton3Stack} />
      <Tab.Screen name="Button 4" component={RandomButton4Stack} />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
