/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image } from "@rneui/themed";
import { StackActions } from '@react-navigation/native'
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import FormButton from "../../components/FormButton";
import color from "../../config/color";

const Profile = ({ navigation }) => {
    const [data, setData] = useState([])

    const handleLogout = () => {
        axios.post("/auth/logout")
            .then(res => {
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
                <View style={{ padding: 10, alignItems: 'center', backgroundColor: color.orange, width: '100%' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../components/img/user.jpg')}
                            style={styles.image}

                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#3493D9',
                        }}>
                        {data.username}
                    </Text>
                </View>

                <View style={{ padding: 20 ,}}>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: "row", marginBottom: -5 }}>
                            <AntDesign
                                name="user"
                                size={22}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{
                                    opacity: 0.5,
                                }}>
                                Name
                            </Text>
                        </View>

                        <TextInput
                            placeholder="name"
                            value={data.name}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: "row", marginBottom: -5 }}>
                            <AntDesign
                                name="user"
                                size={22}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{
                                    opacity: 0.5,
                                }}>
                                Username
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Username"
                            value={data.username}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: "row", marginBottom: -5 }}>
                            <AntDesign
                                name="enviroment"
                                size={22}
                                style={{ marginRight: 5 }}
                            />
                            <Text
                                style={{ opacity: 0.5, }}>
                                Address
                            </Text>
                        </View>

                        <TextInput
                            placeholder="Address"
                            value={data.address}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={{ alignItems: "center", width: '100%' }}>
                    <FormButton
                        buttonTitle='Đăng xuất'
                        onPress={() => handleLogout()} />
                </View>
            </ScrollView>

        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    textInput: {
        fontSize: 18,
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
    },
    logoutButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    }
})
