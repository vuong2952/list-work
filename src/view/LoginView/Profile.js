/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Avatar, Card, withTheme } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Ionicons from "react-native-vector-icons/Ionicons";
import color from "../../config/color";
import { StackActions } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { removeStorage } from "../../navigation/Apis";



const Profile = ({ navigation }) => {
    const [data, setData] = useState([])

    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(res => {
                removeStorage()
                navigation.dispatch(StackActions.replace("Login"))
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        const storage = async () => {
            let items = await AsyncStorage.getItem("user");
            setData(JSON.parse(items))
        }
        storage()
    }, [])

    return (
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: color.orange, height: 140, }}>
                <View style={{ marginTop: 40, flexDirection: "row", justifyContent: "center" }}>
                    <Avatar
                        size={160}
                        source={require('../../components/img/user1.jpg')}
                        rounded
                        containerStyle={styles.img}
                    />
                </View>
            </View>
            <View style={{ marginTop: 30 }}>
                <Card containerStyle={styles.card1}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name='user-o'
                            size={28}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{data.name}</Text>
                    </View>
                </Card>
                <Card containerStyle={styles.card}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name='transgender-alt'
                            size={30}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{data.gender}</Text>
                    </View>

                </Card>
                <Card containerStyle={styles.card}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name='envelope-o'
                            size={28}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{data.mail}</Text>
                    </View>

                </Card>
                <Card containerStyle={styles.card}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome
                            name='phone'
                            size={30}
                            style={styles.icon}
                        />
                        <Text style={styles.text}>{data.phone}</Text>
                    </View>

                </Card>
                <Card containerStyle={styles.card}>
                    <View style={{ flexDirection: "row" }}>
                        <FontAwesome5Icon
                            name='map-marker-alt'
                            size={28}
                            style={styles.icon}
                        />
                        <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                            <Text style={styles.text}>{data.address}</Text>
                        </ScrollView>
                    </View>

                </Card>
                <View style={styles.logout}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        handleLogout();
                    }}>
                        <Text style={styles.logoutButtonText}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
        // </View>
    )

}

export default Profile;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    img: {

        borderColor: color.orange,
        borderWidth: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textName: {
        textAlign: "center",
        marginTop: 20,
        fontSize: 18
    },
    card: {
        // height: 60,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    card1: {
        height: 60,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginTop: 65,
    },
    icon: {
        color: color.orange,
        flexDirection: "row",
        justifyContent: "flex-start",
        marginRight: 15,
        marginLeft: 7,
    },
    text: {
        fontSize: 16,
        marginTop: 3,
    },
    logout: {
        alignItems: 'center',
        marginBottom: 70,
        marginTop: 20,
        padding: 15,

    },
    logoutButton: {
        width: '100%',
        height: 60,
        backgroundColor: '#ff7700',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    }
})