/* eslint-disable prettier/prettier */
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const setStorage = async (token) => {
  console.log('token',token);
  await AsyncStorage.setItem("token", token)
}
export const setUser = async (data) => {
  await AsyncStorage.setItem("user", JSON.stringify(data))
  console.log(data);
}

export const removeStorage = async () => {
  // await AsyncStorage.removeItem("token")
  // await AsyncStorage.removeItem("userInfo")
  // await AsyncStorage.removeItem("login")
  AsyncStorage.clear();
}

export const setLogin = async (data) => {
  await AsyncStorage.setItem("login", JSON.stringify(data));
}

// axios.defaults.baseURL = 'http://nk.ors.vn/mobile/api'
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


