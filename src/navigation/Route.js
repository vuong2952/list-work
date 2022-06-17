/* eslint-disable prettier/prettier */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';

import Login from '../view/login/Login';
import ListWorkScreen from '../view/listwork/ListWorkScreen';
import ListWork from '../view/listwork/ListWork';
import Profile from '../view/profile/Profile';
import Dashboard from '../view/dasboard/Dashboard';
import color from '../config/color';
import SplashScreen from '../view/login/SplashScreen';
import Indi from '../components/indicators';
import Indicator from '../components/indicators/Indicator';
import { NotificationListen, requestUserPermission } from './Apis';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const DashboardScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Dashboard">
            <HomeStack.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
            <HomeStack.Screen
                name="ListWork"
                component={ListWork}
                options={{
                    ...myOptions,
                    title: "Danh sách công việc",
                    headerRight: () => (
                        <View>
                            <FontAwesome5
                                name="tasks"
                                color={color.light}
                                size={35}
                            />
                        </View>
                    )
                }} />
            <HomeStack.Screen
                name="ListWorkScreen"
                component={ListWorkScreen}
                options={{
                    ...myOptions,
                    title: "ListWork",
                    headerRight: () => (
                        <View>
                            <FontAwesome5
                                name="tasks"
                                color={color.light}
                                size={35}
                            />
                        </View>
                    )
                }} />
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

const myOptions = {
    title: "",
    headerTintColor: 'white',
    headerStyle: {
        backgroundColor: "#ff7700",
    },
    headerRight: () => (
        <View>
            <FontAwesome5
                name=""
                color={color.light}
                size={35}
            />
        </View>
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
            }}
            initialRouteName="DashboardScreen">
            <Tab.Screen
                name="DashboardScreen"
                component={DashboardScreen}
                options={{
                    // title: 'Home',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesome5
                                name="home"
                                size={25}
                                color={focused ? '#ff7700' : color.grey1}
                            />
                            <Text style={{ color: focused ? color.yellow : color.grey1, fontSize: 12 }}>Home</Text>
                        </View>
                    ),
                    tabBarShowLabel: false


                }} />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ focused }) => (
                        <View style={{ alignItems: 'center' }}>
                            <FontAwesome5
                                name="user-alt"
                                size={25}
                                color={focused ? '#ff7700' : color.grey1}
                            />
                            <Text style={{ color: focused ? color.yellow : color.grey1, fontSize: 12 }}>Profile</Text>
                        </View>
                    ),
                    tabBarShowLabel: false

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
                <Stack.Screen name="Dashboard" component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
            {isLoading && <Indicator />}
        </NavigationContainer>
    )
}

export default Route;

