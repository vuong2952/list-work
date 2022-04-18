/* eslint-disable prettier/prettier */
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';

export const getToken = () => {
  return AsyncStorage.getItem("token")
}

export const removeUserSession = () => {
  sessionStorage.removeItem('token')
  sessionStorage.removeItem('username')
}
// export const token = "?token=" + getToken()
export const getName = async () => {
  console.log("use",await AsyncStorage.getItem("userInfo"));
  await AsyncStorage.getItem("userInfo");
}
export const setStorage = async (userInfo) => {
  await AsyncStorage.setItem("userInfo", userInfo.data.name)
}
export const instance = axios.create({
  baseURL: "http://nk.ors.vn/mobile/api",
  timeout: 1000,
  headers: { "Authorization": "Bearer" + getToken() }
})
