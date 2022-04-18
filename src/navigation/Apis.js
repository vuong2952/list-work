import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const setStorage = async (token) => {
  await AsyncStorage.setItem("token", token)
}

axios.defaults.baseURL='http://nk.ors.vn/mobile/api'

axios.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = "Bearer "+ token
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);
