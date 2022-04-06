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

const Stack = createNativeStackNavigator();

function App() {

  const [isLogin, setIsLogin] = useState(true)

  return (
      <NavigationContainer>
        {
        isLogin ? (
          <Stack.Navigator initialRouteName='Login'>
           <Stack.Screen name="Login" component={Login}/>
           <Stack.Screen name="SignUp" component={SignUp} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator initialRouteName='ListWork'>
           <Stack.Screen name="ListWork" component={ListWork} />
           <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        )
        }
      </NavigationContainer>
  );
}

export default App;
