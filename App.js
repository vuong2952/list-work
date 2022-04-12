/* eslint-disable prettier/prettier */
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

// import Login from './src/view/LoginView/Login';
// import Login from './src/view/LoginView/Login';
import LoginScreen from './src/view/LoginView/Login3';
import ListWork from './src/view/LoginView/ListWork';
import Profile from './src/view/LoginView/Profile';
import Register from './src/view/LoginView/Register';
import RegisterScreen from './src/view/LoginView/RegisterScreen';

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
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={({ navigation }) => ({
                title: '',
                headerStyle: {
                  backgroundColor: '#f9fafd',
                  shadowColor: '#f9fafd',
                  elevation: 0,
                }
              })} />
            {/* <Stack.Screen name="Register" component={Register}/> */}
            <Stack.Screen
              name="Register"
              component={RegisterScreen}
              options={({ navigation }) => ({
                title: '',
                headerStyle: {
                  backgroundColor: '#f9fafd',
                  shadowColor: '#f9fafd',
                  elevation: 0,
                }
              })} />
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
