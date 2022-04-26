/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Card, withTheme } from "@rneui/themed";
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



const Profile = ({ navigation }) => {
    const [data, setData] = useState([])

    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(res => {
                // removeStorage()
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
        <View style={styles.container}>
            <ScrollView>
                <View style={{ backgroundColor: color.orange, flex: 1, height: 200 }}>

                </View>
                <View style={{ position: "relative", top: -200 }}>


                    <Card containerStyle={styles.cardHeader}>
                        {
                            data.gender === 'male' ?
                                <Image
                                    source={require('../../components/img/male.jpg')}
                                    style={styles.img}
                                /> : <Image
                                    source={require('../../components/img/female.png')}
                                    style={styles.img}
                                />
                        }
                        {/* <Ionicons name='camera' size={30} style={styles.iconHeader} /> */}
                        <Text style={styles.textName}>@{data.username}</Text>
                    </Card>
                    <Card containerStyle={styles.card}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome
                                name='user-o'
                                size={28}
                                style={styles.icon}
                            />
                            <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                <Text style={styles.text}>{data.name}</Text>
                            </ScrollView>
                        </View>

                    </Card>
                    <Card containerStyle={styles.card}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome
                                name='transgender-alt'
                                size={30}
                                style={styles.icon}
                            />
                            <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                <Text style={styles.text}>{data.gender}</Text>
                            </ScrollView>

                        </View>

                    </Card>
                    <Card containerStyle={styles.card}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome
                                name='envelope-o'
                                size={28}
                                style={styles.icon}
                            />
                            <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                <Text style={styles.text}>{data.mail}</Text>
                            </ScrollView>
                        </View>

                    </Card>
                    <Card containerStyle={styles.card}>
                        <View style={{ flexDirection: "row" }}>
                            <FontAwesome
                                name='phone'
                                size={30}
                                style={styles.icon}
                            />
                            <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                <Text style={styles.text}>{data.phone}</Text>
                            </ScrollView>
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
                            // handleLogout();
                        }}>
                            <Text style={styles.logoutButtonText}>Đăng xuất</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView >
        </View>
    )

}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'white',
        // height: windowHeight / 2,
    },
    cardHeader: {
        height: 200,
        width: windowWidth / 2,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        marginTop: 60,
        marginBottom: 20,
        alignItems: "center",
    },
    img: {
        borderRadius: 100,
        height: windowHeight / 3,
        width: windowWidth / 5.5,
        borderColor: color.orange,
        borderWidth: 2,
    },
    textName: {
        textAlign: "center",
        marginTop: 15,
        fontSize: 18
    },
    iconHeader: {
        // borderWidth: 1,
        // borderColor: "#000",
        width: 30,
        borderRadius: 100,
        color: '#000'
    },
    card: {
        width: windowWidth / 2,
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
        // justifyContent: "center",
        flexDirection: "row",

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
        marginBottom: -100,
        marginTop: 20
    },
    logoutButton: {
        marginTop: 18,
        position: "relative",
        bottom: 10,
        width: windowWidth / 2,
        height: 60,
        backgroundColor: '#ff7700',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    }
})