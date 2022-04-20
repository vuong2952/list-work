/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
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
import AuthProvider from './src/context/AuthContext';


function App() {
  // const [isLoading, setIsLoading] = useState(true);
  // const [userToken, setUserToken] = useState(null);

  // useEffect(() => {
  //   setTimeout(()=> {
  //     setIsLoading(false);
  //   }, 1000);
  // }, []);
  return (
    <AuthProvider>
      <Route />
    </AuthProvider>

  );
}

export default App;
