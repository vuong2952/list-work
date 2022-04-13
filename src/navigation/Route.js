import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';


import Login from '../view/LoginView/Login3'
// import Register from '../view/LoginView/Register'
import ListWork from '../view/LoginView/ListWork'
import Profile from '../view/LoginView/Profile'


const Route = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName='Login'>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
            {/* <Stack.Screen name="Register" component={Register} options={{headerShown: false}}/> */}
            <Stack.Screen name="ListWork" component={ListWork} options={{headerShown: false}}/>
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    )
}

export default Route
