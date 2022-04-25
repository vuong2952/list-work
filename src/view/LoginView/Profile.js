/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image } from '@rneui/themed';
import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import { removeStorage } from '../../navigation/Apis';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const Profile = ({ navigation }) => {
    const [userIn, setUserIn] = useState({});

    const handleLogout = () => {
        axios.post('/auth/logout')
            .then(res => {
                removeStorage();
                navigation.navigate('Login');
            })
            .catch(err => {
                console.log('ERROR', err);
            });
    };

    useEffect(() => {
        const getUserInfo = async () => {
            try {
                setUserIn(JSON.parse(await AsyncStorage.getItem('userInfo')));
            } catch (e) {
                console.log('ERROR', e);
            }
        };
        getUserInfo();
    }, []);
    return (
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
                    }} />
            </View>

            <View style={{ padding: 20 }}>
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

                    <TextInput
                        placeholder="name"
                        value={userIn.name}
                        // defaultValue={props.name}
                        style={styles.textInput}
                        editable={false}
                    />
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

                    <TextInput
                        placeholder="Trống"
                        value={userIn.phone}
                        style={styles.textInput}
                        editable={false}
                    />
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

                    <TextInput
                        placeholder="Trống"
                        value={userIn.gender === 'male' ? 'nam' : 'nữ'}
                        style={styles.textInput}
                        editable={false}
                    />
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

                    <TextInput
                        placeholder="Trống"
                        value={userIn.phone}
                        style={styles.textInput}
                        editable={false}
                    />
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

                    <TextInput
                        placeholder="Address"
                        value={userIn.address}
                        style={styles.textInput}
                        editable={false}
                    />
                </View>

            </View>
            <View style={{ alignItems: 'center', marginBottom: 60 }}>
                <TouchableOpacity style={styles.logoutButton} onPress={() => {
                    handleLogout();
                }}>
                    <Text style={styles.logoutButtonText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default Profile;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',

    },
    textInput: {
        fontSize: 18,
        borderBottomWidth: 1,
        borderColor: '#CDCDCD',
        color: '#333333',
    },
    image: {
        width: 120,
        height: 120,
        borderRadius: 100,
    },
    logoutButton: {
        marginTop: 18,
        position: 'relative',
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
    },
});
