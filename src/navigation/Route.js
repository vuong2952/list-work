/* eslint-disable prettier/prettier */
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import React, { useContext, useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ActivityIndicator } from 'react-native';
import analytics from '@react-native-firebase/analytics';
import messaging from '@react-native-firebase/messaging';

import Login from '../view/LoginView/Login4';
import ListWorkScreen from '../view/LoginView/ListWorkScreen';
import ListWork from '../view/LoginView/ListWork';
import Profile from '../view/LoginView/Profile';
import Dashboard from '../view/LoginView/Dashboard';
import Dashboard2 from '../view/LoginView/Dashboard2';

import color from '../config/color';
import SplashScreen from '../view/LoginView/SplashScreen';
import Indi from '../components/indicators';
import Indicator from '../components/indicators/Indicator';
import { NotificationListen, requestUserPermission } from './Apis';


import { createNavigationContainerRef } from '@react-navigation/native';

const navigationRef = createNavigationContainerRef()

function navigate(name, params) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}
// import Navigation from '../../rootNavigation';
// import Navigation from '../Navigation';
// import { fcmService } from '../components/notification/FCMservice';
// import { localNotificationService } from '../components/notification/LocalNotificationService';



const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = createNativeStackNavigator();
const LWStack = createNativeStackNavigator();
const DashboardScreen = () => {
    return (
        <HomeStack.Navigator initialRouteName="Dashboard2">
            <HomeStack.Screen name="Dashboard2" component={Dashboard2} options={{ headerShown: false }} />
            <HomeStack.Screen name="ListWork" component={ListWork} options={{ headerShown: false }} />
            <HomeStack.Screen name="ListWorkScreen" component={ListWorkScreen} options={{ title: '' }} />
        </HomeStack.Navigator>
    )
}


const ProfileStack = createNativeStackNavigator();
const ProfileScreen = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile2" component={Profile} options={{ headerShown: false }} />
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
                            <Text style={{ color: focused ? color.orange : color.grey1, fontSize: 12 }}>Home</Text>
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
                            <Text style={{ color: focused ? color.orange : color.grey1, fontSize: 12 }}>Profile</Text>
                        </View>
                    ),
                    tabBarShowLabel: false

                }} />
        </Tab.Navigator>
    )
}

const Route = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [loading, setLoading] = useState(true);
    const [initialRoute, setInitialRoute] = useState('SplashScreen');

    const NotificationListen = () => {
        messaging().onNotificationOpenedApp(remoteMessage => {
            console.log(
                '1 Notification caused app to open from background state:',
                remoteMessage.notification, '-',
                remoteMessage.data.type,
            );
            remoteMessage.data.type && navigate(remoteMessage.data.type);
        });
        messaging()
            .getInitialNotification()
            .then(remoteMessage => {
                if (remoteMessage) {
                    console.log(
                        '2 Notification caused app to open from quit state:',
                        remoteMessage.notification, '-type:  ',
                        remoteMessage.data.type
                    );
                    remoteMessage.data.type && setInitialRoute(remoteMessage.data.type);
                    console.log('3', remoteMessage.data.type);
                }
            });
        messaging().onMessage(async remoteMessage => {
            console.log('4 Notification on froground state .....', remoteMessage);
        })
    }
    useEffect(() => {
        Indi.setShow(setIsLoading);
        requestUserPermission();
        NotificationListen();
        console.log('initialRoute', initialRoute)

    }, [])
    return (
        <NavigationContainer
            ref={navigationRef}
        >
            <Stack.Navigator
                initialRouteName={initialRoute}

                >
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Dashboard" component={TabNavigation} options={{ headerShown: false }} />
            </Stack.Navigator>
            {isLoading && <Indicator />}
        </NavigationContainer>
    )

}

export default Route;

