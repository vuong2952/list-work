/* eslint-disable prettier/prettier */
import axios from "axios"
import AsyncStorage from '@react-native-async-storage/async-storage';
import messaging from '@react-native-firebase/messaging';
export const setStorage = async (token) => {
  await AsyncStorage.setItem("token", token)
}
export const setUser = async (data) => {
  await AsyncStorage.setItem("user", JSON.stringify(data))
  console.log(await AsyncStorage.getItem("user"));
}

export const setLogin = async (data) => {
  await AsyncStorage.setItem("login", JSON.stringify(data))
}

export const removeStorage = async () => {
  AsyncStorage.clear()
}

axios.defaults.baseURL = 'http://nk.ors.vn/mobile/api'
// axios.defaults.baseURL = 'http://192.168.1.14:8000/mobile/api'
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

export async function requestUserPermission() {
  const authStatus = await messaging().requestPermission();
  const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
      console.log('Authorization status:', authStatus);
      getFCMToken();
  }
}

async function getFCMToken() {
  let fcmToken = await AsyncStorage.getItem("fcmToken");
  console.log(fcmToken, 'old token')
  if (!fcmToken) {
      try {
          const fcmToken = await messaging().getToken();
          if (fcmToken) {
              console.log(fcmToken, 'new Token')
              await AsyncStorage.setItem("fcmToken", fcmToken);
          } else {

          }
      } catch (error) {
          console.log(error, 'error in fcmToken')
      }
  }
}

// const navigation = useNavigation();
//   const [loading, setLoading] = useState(true);
//   const [initialRoute, setInitialRoute] = useState('Home');

export const NotificationListen = () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    console.log(
      'Notification caused app to open from background state:',
      remoteMessage.notification,
    );
    // navigation.navigate(remoteMessage.data.type);
  });
  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
        // setInitialRoute(remoteMessage.data.type);
      }
    });
  messaging().onMessage(async remoteMessage => {
    console.log('Notification on froground state .....', remoteMessage);
  })
}