/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useState } from 'react';
import ListWork from './src/view/LoginView/ListWork';
import Profile from './src/view/LoginView/Profile';

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


function App() {
  return (
    <NavigationContainer>
      <Route/>
    </NavigationContainer>
    
  );
}

export default App;
