/* eslint-disable prettier/prettier */
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const setStorage = async (token) => {
  console.log('token',token);
  await AsyncStorage.setItem("token", token)
}

export const removeStorage = async () => {
  await AsyncStorage.removeItem("token")
  await AsyncStorage.removeItem("userInfo")
}

axios.defaults.baseURL = 'http://192.168.1.10:8000/mobile/api'
axios.defaults.timeout = 1000

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = "Bearer " + token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);


