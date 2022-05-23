/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import Login from '../view/LoginView/Login4';
import ListWorkScreen from '../view/LoginView/ListWorkScreen';
import ListWork from '../view/LoginView/ListWork';
import Profile from '../view/LoginView/Profile';
import color from '../config/color';
import SplashScreen from '../view/LoginView/SplashScreen';
import Indi from '../components/indicators';
import Indicator from '../components/indicators/Indicator';
import { NotificationListen, requestUserPermission } from './Apis';
import { navigationRef,isReadyRef } from '../../rootNavigation';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const LWScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="ListWork">
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
                    left: 1,
                },
                position: 'absolute',
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
                    // tabBarLabelStyle: {
                    //     ma
                    // }
                    // tabBarShowLabel: false


                }} />
            <Tab.Screen
                name="Profile"
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
                    // tabBarShowLabel: false
                }} />
        </Tab.Navigator>
    )
}

const Route = () => {

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        Indi.setShow(setIsLoading);
        requestUserPermission();
        NotificationListen();
        // return () => {
        //     isReadyRef.current = false;
        // }
    }, [])
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen" >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="HomeApp" component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
            {isLoading && <Indicator />}
        </NavigationContainer>
    )
}

export default Route;

