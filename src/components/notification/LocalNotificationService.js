/* eslint-disable prettier/prettier */
import PushNotification from "react-native-push-notification";
import { Platform } from "react-native";


class LocalNotificationService {
    configure = (onOpenNotification) => {
        PushNotification.configure({
            onRegister: function (token) {
                console.log("[LocalNotificationService] TOKEN:", token);
            },

            onNotification: function (notification) {
                console.log("[LocalNotificationService] NOTIFICATION:", notification);
                if (!notification?.data){
                    return
                }
                notification.userInteraction = true;
                onOpenNotification(Platform.OS === 'ios' ? notification.data.item : notification.data);
                
            },

            // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
            onAction: function (notification) {
                console.log("ACTION:", notification.action);
                console.log("NOTIFICATION:", notification);
            },
            onRegistrationError: function (err) {
                console.error(err.message, err);
            },
            permissions: {
                alert: true,
                badge: true,
                sound: true,
            },

            // Should the initial notification be popped automatically
            // default: true
            popInitialNotification: true,

            /**
             * (optional) default: true
             * - Specified if permissions (ios) and token (android and ios) will requested or not,
             * - if not, you must call PushNotificationsHandler.requestPermissions() later
             * - if you are not using remote notification or do not have Firebase installed, use this:
             *     requestPermissions: Platform.OS === 'ios'
             */
            requestPermissions: true,
        });
    }
    unRegister = () => {
        PushNotification.unregister()
    }
    
    showNotifications = (id, title, message, data={}, options={}) => {
        PushNotification.localNotification({
            ...this.buildAndroidNotification(id, title, message, data, options),
            title: title || "",
            message: message || "",
            playSound: options.playSound || false,
            soundName: options.soundName || 'default',
            userInteraction: false,
        });
    }

    buildAndroidNotification = (id, title, message, data={}, options={}) => {
        return {
            id: id,
            autoCancel: true,
            largeIcon: options.largeIcon || "ic_laucher",
            smallIcon: options.smallIcon || "ic_notification",
            bigText: message || '',
            subText: title || '',
            vibrate: options.vibrate || true,
            vibration: options.vibration || 300,
            priority: options.priority || 'high',
            importance: options.importance || "high",
            data: data,
        }
    }

    cancelAllLocalNotifications = () => {
        if(Platform.OS === 'android') {
            PushNotification.cancelAllLocalNotifications();
        }
    }

    removeDeliveredNotificationByID = (notificationID) => {
        console.log("[LocalNotificationService] removeDeliveredNotificationByID: ", notificationID);
        PushNotification.cancelAllLocalNotifications({id: '${notificationID}'});
    }
}

export const localNotificationService = new LocalNotificationService()