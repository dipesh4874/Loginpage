import {View, Text, Settings} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screen/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from '../screen/Profile';


const stack = createNativeStackNavigator();
const StackNavigation = () => {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="stack"
        screenOptions={{headerShown: false}}>
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="profile" component={Profile} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;
