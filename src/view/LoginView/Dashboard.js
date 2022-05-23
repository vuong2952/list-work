/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Avatar, Badge, Card, withTheme } from "@rneui/themed";
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



const Dashboard = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const storage = async () => {
            let items = await AsyncStorage.getItem("user");
            setData(JSON.parse(items))
        }
        storage()
    }, [])

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            axios.post("/process/list")
                .then(res => {
                    setDataList(res.data.data)
                }).catch(err => {
                    console.log('Error ...', err)
                })
        });
        return loadData;
    }, [navigation])

    return (
        // <View style={styles.container}>
        <ScrollView style={styles.container}>
            <View style={{ backgroundColor: '#ff7700', height: 140, borderBottomEndRadius: 50, position: 'absolute', width: '100%', flex: 1 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flexDirection: 'column', left: 10 }}>
                        <Image
                            source={require('../../components/img/NamKhanh.jpg')}
                            style={{ height: 70, width: 200, marginTop: 10 }}
                        />
                        <Text style={styles.textName}>Xin chào, {data.name}</Text>
                    </View>

                    <Avatar
                        size={110}
                        source={require('../../components/img/user1.jpg')}
                        rounded
                        containerStyle={styles.img}
                    />
                </View>


            </View>
            <View style={{ marginTop: 100, flex: 4 }}>
                <Card containerStyle={styles.card1}>
                    <TouchableOpacity onPress={() => navigation.navigate("ListWork")}>
                        <View style={{ flexDirection: "column" }}>
                            <FontAwesome
                                name='list-alt'
                                size={80}
                                style={styles.icon}
                            />
                            <Text style={styles.text}>Công việc</Text>
                            <Text style={styles.badge}>{dataList.length > 0 ? dataList.length : 0}</Text>
                        </View>
                    </TouchableOpacity>

                </Card>

            </View>
        </ScrollView >
        // </View>
    )

}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    img: {
        position: 'absolute',
        right: 7,
        alignSelf: 'center',
        borderColor: '#ff7700',
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
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontFamily: 'Montserrat-Light',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    badge: {
        position: 'absolute',
        textAlign: 'center',
        top: -5,
        right: -7,
        backgroundColor: '#ff7700',
        borderRadius: 100,
        height: 33,
        width: 33,
        padding: 2,
        paddingHorizontal: 2,
        fontWeight: 'bold',
        fontSize: 20
    },
    card1: {
        height: 160,
        width: 180,
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
        color: '#ff7700',
        alignSelf: "center",
    },
    text: {
        fontSize: 24,
        marginTop: 10,
        alignSelf: 'center',
        backgroundColor: color.grey,
        padding: 2,
        paddingHorizontal: 10,
        borderRadius: 10,
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