/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image } from "@rneui/themed";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import { windowHeight, windowWidth } from "../../utils/Dimension";
import * as Async from "../../navigation/Apis"
import AsyncStorage from "@react-native-async-storage/async-storage";


const Profile = ({ navigation }) => {
    return (
        <View>
            <ScrollView contentContainerStyle={styles.container}>
                <View style={{ padding: 20, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../components/img/user.png')}
                            style={styles.image}

                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#3493D9',
                        }}>
                        {/* Change profile photo */}
                    </Text>
                </View>

                <View style={{ padding: 20 }}>
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
                            value={Async.getName()}
                            // defaultValue={props.name}
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
                            defaultValue={Async.getUsername()}
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
                            defaultValue={Async.getAddress()}
                            style={styles.textInput}
                        />
                    </View>
                </View>
                <View style={{ alignItems: "center" }}>
                    <TouchableOpacity style={styles.logoutButton} onPress={() => {
                        navigation.navigate("Login")
                        Async.removeUserSession()
                    }}>
                        <Text style={styles.logoutButtonText}>Đăng xuất</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>

        </View>
    )
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
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
