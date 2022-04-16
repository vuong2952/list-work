import axios from "axios"

export const getToken = () => {
    return sessionStorage.getItem("token") || null
}
const token = "?token=" + getToken()

export const instance = axios.create({
  baseURL: "http://127.0.0.1:8000",
  timeout: 1000,
  headers: {"Authorization": "Bearer" + token}
})
