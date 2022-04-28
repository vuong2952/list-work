/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';

import Login from '../view/LoginView/Login4';
import ListWorkScreen from '../view/LoginView/ListWorkScreen';
import ListWork from '../view/LoginView/ListWork';
import Profile from '../view/LoginView/Profile';
// import Profile from '../view/LoginView/Profile2';
import color from '../config/color';
// import { AuthContext } from '../context/AuthContext';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const LWScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="ListWork">
            <HomeStack.Screen name="ListWork" component={ListWork} options={{ headerShown: false }} />
            <HomeStack.Screen name="ListWorkScreen" component={ListWorkScreen} options={{ title: ''  }} />
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
            initialRouteName="LWScreen">
            <Tab.Screen
                name="Home"
                component={LWScreen}
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
    // const {userInfo} = useContext(AuthContext);

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="HomeApp" component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
        // <NavigationContainer>
        //     <Stack.Navigator initialRouteName="Login">
        //         { 
        //             userInfo.data?.token ? (
        //                 <Stack.Screen name="HomeApp" component={TabNavigation} options={{ headerShown: false }} />
        //             ) : (
        //                 <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        //             )
        //         }
        //     </Stack.Navigator>
        // </NavigationContainer>
    )
}

export default Route;

