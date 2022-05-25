/* eslint-disable prettier/prettier */
import messaging from '@react-native-firebase/messaging';
import { Platform } from 'react-native';

class FCMService {

    register = (onRegister, onNotification, onOpenNotification) => {
        this.checkPermission(onRegister)
        this.createNotificationListeners(onRegister, onNotification, onOpenNotification)
    }

    checkPermission = (onRegister) => {
        messaging().hasPermission()
            .then(enabled => {
                if (enabled) {
                    this.getToken(onRegister)
                }
                else {
                    this.requestPermission(onRegister)
                }
            }).catch(error => {
                console.log("[FCMService] Permission rejected", error);
            })
    }

    getToken = (onRegister) => {
        messaging().getToken()
            .then(fcmsToken => {
                if (fcmsToken) {
                    onRegister(fcmsToken)
                }
                else {
                    console.log("[FCMService] User does not have a device token");
                }
            }).catch(error => {
                console.log("[FCMService] getToken rejected", error);
            });
    }

    requestPermission = (onRegister) => {
        messaging().requestPermission()
        .then(() => {
            this.getToken(onRegister)
        }).catch(error => {console.log("[FCMService] Request Permission rejected", error);});
    }

    deleteToken = () => {
        console.log("[FCMService] Delete Token");
        messaging().deleteToken()
        .catch(error=>{console.log("[FCMService] Delete Token error", error);});
    }

    createNotificationListeners = (onRegister, onNotification, onOpenNotification) => {
        messaging()
        .onNotificationOpenedApp(remoteMessage => {
            console.log("[FCMService] onNotificationOpenedApp Notification caused app to open...")
            if (remoteMessage) {
                const notification = remoteMessage.notification
                onOpenNotification(notification)
            }
        });
        messaging()
        .getInitialNotification()
        .then(remoteMessage => {
            console.log("[FCMService] getInitialNotification Notification caused app to open...")
            if (remoteMessage) {
                const notification = remoteMessage.notification
                onOpenNotification(notification)
            }
        })
        
        this.messageListener = messaging().onMessage(async remoteMessage => {
            console.log("[FCMService] new FCM message arrived", remoteMessage);
            if (remoteMessage) {
                let notification = null 
                if(Platform.OS === "IOS") {
                    notification = remoteMessage.data.notification
                }
                else {
                    notification = remoteMessage.notification
                }
                onNotification(notification)
            }
        })
        messaging().onTokenRefresh(fcmToken => {
            console.log("[FCMService] new token fresh", fcmToken)
            onRegister(fcmToken)
        })
    } 

    unRegister = () => {
        this.messageListener();
    }
}

export const fcmService = new FCMService();