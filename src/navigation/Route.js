/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Login from '../view/LoginView/Login4';
import ListWorkScreen from '../view/LoginView/ListWorkScreen';
import ListWork from '../view/LoginView/ListWork';
import Profile from '../view/LoginView/Profile';
import Dashboard from '../view/LoginView/Dashboard';
import color from '../config/color';
import SplashScreen from '../view/LoginView/SplashScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const DashboardScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Dashboard">
            <HomeStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <HomeStack.Screen name="ListWork" component={ListWork} options={{ headerShown: false }} />
            <HomeStack.Screen name="ListWorkScreen" component={ListWorkScreen} options={{ title: '' }} />
        </HomeStack.Navigator>
    )
}


const ProfileStack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
        </ProfileStack.Navigator>
    )
}

const TabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 55,
                    position: "absolute",
                    right: 1,
                    left: 1
                },
                position: 'absolute'
            }}
            initialRouteName="DashboardScreen">
            <Tab.Screen
                name="DashboardScreen"
                component={DashboardScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5
                                name="home"
                                size={25}
                                color={focused ? color.orange : color.gray}
                            />
                        </View>
                    ),
                    tabBarShowLabel: false


                }} />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View>
                            <FontAwesome5
                                name="user-alt"
                                size={25}
                                color={focused ? color.orange : color.gray}
                            />
                        </View>
                    ),
                    tabBarShowLabel: false
                }} />
        </Tab.Navigator>
    )
}

const Route = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={TabNavigation} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route;

