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
                removeStorage();
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
            {/* <ScrollView> */}
                <View>
                    <View style={styles.header}>
                        {/* <View style={styles.cardHeader}> */}

                    </View>
                </View>

                <View style={styles.body}>
                    <ScrollView>
                        <View style={styles.imgHeader}>
                            <View>
                                <Avatar
                                    size={160}
                                    rounded
                                    source={require('../../components/img/user1.jpg')}
                                    style={styles.img}
                                />
                            </View>
                        </View>
                        <View style={{ marginBottom: 65 }}>
                            <Card containerStyle={styles.cardBody}>
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
                            <Card containerStyle={styles.cardBody}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome
                                        name='transgender-alt'
                                        size={28}
                                        style={styles.icon}
                                    />
                                    <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                        <Text style={styles.text}>{data.gender === 'male' ? 'Nam' : 'Nữ'}</Text>
                                    </ScrollView>
                                </View>
                            </Card>
                                                        <Card containerStyle={styles.cardBody}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome
                                        name='phone'
                                        size={28}
                                        style={styles.icon}
                                    />
                                    <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                        <Text style={styles.text}>{data.phone}</Text>
                                    </ScrollView>
                                </View>
                            </Card>
                            <Card containerStyle={styles.cardBody}>
                                <View style={{ flexDirection: "row" }}>
                                    <FontAwesome
                                        name='envelope-o'
                                        size={28}
                                        style={styles.icon}
                                    />
                                    <ScrollView horizontal style={{ width: windowHeight / 1.4 }}>
                                        <Text style={styles.text}>{data.email}</Text>
                                    </ScrollView>
                                </View>
                            </Card>
                            <Card containerStyle={styles.cardBody}>
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
                            <TouchableOpacity style={styles.buttonLogout}
                                onPress={() => {
                                    handleLogout();
                                }}>
                                <Text style={{ textAlign: "center", fontSize: 16, color: 'white', fontWeight: 'bold' }}>Đăng xuất</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            {/* </ScrollView> */}
        </View >
    )

}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        // flex: 1,
        backgroundColor: color.orange,
        marginTop: -380,
        height: 600,
        width: 600,
        marginLeft: 30,
        borderRadius: 1000,
    },
    body: {
        marginTop: -220,
        // flex: 3,
        // backgroundColor: 'white',
    },
    imgHeader: {
        marginTop: 70,
        flexDirection: "row",
        justifyContent: "center",

    },
    img: {
        height: 140,
        width: 140,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: color.orange,
        // borderRadius: 100,

        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    cardHeader: {
        flexDirection: "row",
        justifyContent: "center",
        // marginTop: -140,
        marginLeft: 15,
        marginRight: 15,
        borderRadius: 10,
    },
    textHeader: {
        marginTop: 10,
        flexDirection: "row",
        justifyContent: "center",
    },

    cardBody: {
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: 20,
        borderRadius: 10,
    },
    text: {
        marginTop: 4,
        marginLeft: 14,
        fontSize: 16,
        fontFamily: 'Lato-Regular'
    },
    icon: {
        color: color.orange,
    },
    buttonLogout: {
        backgroundColor: color.orange,
        padding: 22,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginLeft: 15,
        marginRight: 15,
        marginTop: 15,
        marginBottom: 250,

    },
})