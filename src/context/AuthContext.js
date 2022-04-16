/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { instance } from '../navigation/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const login = (username, password) => {
        setIsLoading(true);
        instance.post('/login', {
            username, password
        }).then(res => {
            console.log(res.data);
            setUserInfo(res.data);
            AsyncStorage.setItem('userInfo', JSON.stringify(userInfo));
            setIsLoading(false);
        }).catch(e => {
            console.log('login error ${e}');
            setIsLoading(false);
        })
    }

    return (
        <AuthContext.Provider value={{
            isLoading,
            login
        }} >{children}</AuthContext.Provider>
    )
}