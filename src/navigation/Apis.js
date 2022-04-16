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

export const setStorage = (token, name, username, address) => {
  AsyncStorage.setItem("token", token)
  AsyncStorage.setItem("name", JSON.stringify(name))
  AsyncStorage.setItem("username", JSON.stringify(username))
  AsyncStorage.setItem("address", JSON.stringify(address))
}

export const instance = axios.create({
  baseURL: "http://nk.ors.vn/mobile/api",
  timeout: 1000,
  headers: { "Authorization": "Bearer" + getToken() }
})
