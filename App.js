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
// import Login from './src/view/LoginView/Login4';
// import LoginScreen from './src/view/LoginView/Login3';
import ListWork from './src/view/LoginView/ListWork';
import Profile from './src/view/LoginView/Profile';
// import Register from './src/view/LoginView/Register';
// import RegisterScreen from './src/view/LoginView/RegisterScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import Tabs from './src/navigation/taps';


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

const navOptionHandler = () => ({
  headerShown: false,
})

function ProfileScreen() {
  return (
    <Stack.Navigator initialRouteName='Profile'>
    <Stack.Screen name="Profile" component={Profile} options={navOptionHandler}/>
  </Stack.Navigator>
  );
  
}
function ListWorkScreen() {
  return(
    <Stack.Navigator initialRouteName='ListWork'>
      <Stack.Screen name="ListWork" component={ListWork} options={navOptionHandler}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      {/* <Tab.Navigator>
        <Tab.Screen name="ListWork" component={ListWorkScreen} options={navOptionHandler}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={navOptionHandler}/>
      </Tab.Navigator> */}
      {/* <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            }
          })} /> */}
      {/* <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={({ navigation }) => ({
                title: '',
                headerStyle: {
                  backgroundColor: '#f9fafd',
                  shadowColor: '#f9fafd',
                  elevation: 0,
                }
              })} /> */}
      {/* <Stack.Screen name="Register" component={Register}/> */}
      {/* <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            }
          })} /> */}
      {/* <Stack.Screen name="Profile" component={Profile} /> */}
      {/* <Stack.Screen name="ListWork" component={ListWork} />
      </Stack.Navigator> */}
      <Route/>
    </NavigationContainer>
    
  );
}

export default App;
