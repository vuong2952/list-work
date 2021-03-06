/* eslint-disable prettier/prettier */
/* eslint-disable react-hooks/exhaustive-deps */
import { Alert, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { setLogin, setStorage, setUser } from '../../navigation/Apis';
import { Image } from '@rneui/themed';
import color from '../../config/color';
import Indi from '../../components/indicators'

const SplashScreen = ({ navigation }) => {
    const handleLogin = (data) => {
        Indi.show()
        // axios.post('http://nk.ors.vn/mobile/api/auth/login', {
        axios.post('http://192.168.1.10:8000/mobile/api/auth/login', data)
            .then((response) => {
                if (response.data.data.token !== undefined) {
                    setTimeout(() => {
                        {
                            Indi.show(false)
                            navigation.dispatch(StackActions.replace("Dashboard"))
                            setStorage(response.data.data.token);
                            setUser(response.data.data);
                            setLogin(data);
                        }
                    }, 1000);
                }
                else {
                    Indi.show(false)
                    console.log('5')
                    navigation.dispatch(StackActions.replace("Login"))
                }
            })
            .catch((error) => {
                Indi.show(false)
                navigation.dispatch(StackActions.replace("Login"))
                console.log("Lỗi không đăng nhập được!", error)

            });
    }
    const autoLogin = async () => {
        console.log('6')
        let users = await AsyncStorage.getItem('login');
        if (users !== null) {
            handleLogin(JSON.parse(users));
        }
        else {
            navigation.dispatch(StackActions.replace("Login"));
        }
    }
    useEffect(() => {
        setTimeout(() => {
            autoLogin();
        }, 1000);
    }, [])

    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.img}
                    source={require('../../components/img/NamKhanhIcon.jpg')}
                />
            </View>

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    img: {
        height: '100%',
        width: '100%'
    },
})