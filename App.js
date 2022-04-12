/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';

import Login from './src/view/Login'
import SignUp from './src/view/SignUp'
import ListWork from './src/view/ListWork'
import Profile from './src/view/Profile'

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button
} from 'react-native';
import Route from './src/navigation/Route';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
    
  );
}

export default App;
