/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import FontAwesome from "react-native-vector-icons/FontAwesome";
import color from "../../config/color";
import { StackActions } from "@react-navigation/native";

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

    console.log('user', data)
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={styles.containerHeader}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../components/img/user.jpg')}
                            style={styles.image}

                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            fontSize: 15,
                            color: 'white',
                            marginTop: 10,
                        }} >{data.username}</Text>
                </View>

                <View style={styles.containerBody}>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', marginBottom: -5 }}>
                            <AntDesign
                                name="user"
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{
                                    opacity: 0.5,
                                }}>
                                Name
                            </Text>
                        </View>

                        <Text
                            style={styles.textInput}
                        >{data.name ? data.name : 'Trống'}</Text>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', marginBottom: -5 }}>
                            <AntDesign
                                name="mobile1"
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{
                                    opacity: 0.5,
                                }}>
                                Điện thoại
                            </Text>
                        </View>

                        <Text
                        style={styles.textInput}
                            // style
                        >{data.phone ? data.phone : 'Trống'}</Text>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', marginBottom: -5 }}>
                            <FontAwesome
                                name="transgender"
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{
                                    opacity: 0.5,
                                }}>
                                Giới tính
                            </Text>
                        </View>

                        <Text
                            style={styles.textInput}
                        >{data.gender === 'male' ? 'Nam' : 'Nữ'}</Text>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', marginBottom: -5 }}>
                            <AntDesign
                                name="mail"
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{
                                    opacity: 0.5,
                                }}>
                                Email
                            </Text>
                        </View>

                        <Text
                            style={styles.textInput}
                        >{data.email ? data.email : 'Trống'}</Text>
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', marginBottom: -5 }}>
                            <AntDesign
                                name="enviroment"
                                size={20}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{ opacity: 0.5 }}>
                                Address
                            </Text>
                        </View>

                        <Text

                            style={styles.textInput}
                            editable={false}
                        >{data.address ? data.address : 'Trống'}</Text>
                    </View>

                
                <View style={{ alignItems: 'center', marginBottom: 60 }}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        handleLogout();
                    }}>
                        <Text style={styles.logoutButtonText}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View></View>
            </ScrollView>
        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        width: '100%',
        // backgroundColor: 'white',
        backgroundColor: color.orange,
    },
    containerHeader: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
    },
    containerBody: {
        flex: 3,
        padding: 20,
        borderTopLeftRadius: 50,
        // borderTopRightRadius: 30,
        backgroundColor: 'white',
    },
    textInput: {
        fontSize: 18,
        marginTop: 15,
        borderBottomWidth: 1,
        borderColor: '#CDCDCD',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    logoutButton: {
        marginTop: 18,
        position: "relative",
        bottom: 10,
        width: windowWidth / 2,
        height: windowHeight / 7,
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