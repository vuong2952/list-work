/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { createContext, useState } from 'react'
import { instance } from '../navigation/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const signIn = (username, password) => {
        setIsLoading(true);
        axios.post('http://nk.ors.vn/mobile/api/login', {
            username,
            password,
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
            userInfo,
            signIn,
        }} >{children}</AuthContext.Provider>
        // <AuthContext.Provider value="child">{children}</AuthContext.Provider>
    )
}
export default AuthProvider;