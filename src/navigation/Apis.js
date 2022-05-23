/* eslint-disable prettier/prettier */
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
export const setStorage = async (token) => {
  await AsyncStorage.setItem("token", token)
}
export const setUser = async (data) => {
  await AsyncStorage.setItem("user", JSON.stringify(data))
}

export const setLogin = async (data) => {
  await AsyncStorage.setItem("login", JSON.stringify(data))
}

export const removeStorage = async () => {
  AsyncStorage.clear()
}

// axios.defaults.baseURL = 'http://nk.ors.vn/mobile/api'
axios.defaults.baseURL = 'http://192.168.1.14:8000/mobile/api'
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


