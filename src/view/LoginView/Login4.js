/* eslint-disable prettier/prettier */
import React, { useContext, useEffect, useState } from 'react';
import { StackActions } from '@react-navigation/native'
import {
    View,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    TextInput,
    ActivityIndicator,
    Alert
} from 'react-native';
import { Text } from '@rneui/themed';
import color from '../../config/color';
import FormButton from '../../components/FormButton';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { setLogin, setStorage, setUser } from '../../navigation/Apis'
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay/lib';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkUser, setCheckUser] = useState('');
    const [userValid, setUserValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false);
    const [showPass, setShowPass] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setCheckUser('check');
            setUserValid(false);
        }
        else {
            setCheckUser('');
            setUserValid(true);
        }
    }

    const handleChangePassWord = (val) => {
        if (val.length < 4) {
            setIsPassValid(true);
        }
        else {
            setIsPassValid(false);
        }
    }
    const data = {
        username: username,
        password: password
    }
    const handleLogin = (data) => {
        setIsLoading(true);
        // axios.post('http://nk.ors.vn/mobile/api/auth/login', {
        axios.post('http://192.168.1.14:8000/mobile/api/auth/login', data)
            .then((response) => {
                setIsLoading(true);
                if (response.data.data.token !== undefined) {
                    setIsLoading(true);
                    setTimeout(() => {
                        {
                            navigation.dispatch(StackActions.replace("Dashboard"))
                            setIsLoading(false)
                            setStorage(response.data.data.token);
                            setUser(response.data.data);
                            setLogin(data);
                        }
                    }, 500);
                }
                else {
                    setIsLoading(false);
                    Alert.alert('Tài khoản không đúng!', 'Mời nhập lại tài khoản, mật khẩu.')
                }
                
            })
            .catch((error) => {
                setIsLoading(false);
                // Alert.alert('Tài khoản không đúng!', 'Mời nhập lại tài khoản, mật khẩu.')
                console.log("Lỗi không đăng nhập được!", error)
            });
    }
    useEffect(() => {
        const isLogin = async () => {
            let items = await AsyncStorage.getItem("login");
            if(items !== null) handleLogin(JSON.parse(items))
        }
        isLogin()
    }, [])

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Spinner visible={isLoading} />
            <View style={styles.headerContainer}>
                <Image
                    source={require('../../components/img/NamKhanh.jpg')}
                    style={styles.logo}
                /><Spinner visible={isLoading} />
                <Text style={styles.text}>NK3C</Text>
            </View>
            <View style={{ marginBottom: 25 }}>
                <View style={styles.inputContainer}>
                    <View style={styles.iconStyle}>
                        <Feather
                            name="user"
                            color={color.orange}
                            size={25}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Username'
                        autoCorrect={false}
                        autoCapitalize="none"
                        value={username}
                        onChangeText={(username) => {
                            setUsername(username);
                            textInputChange(username);
                        }}
                    />
                </View>
                {
                    userValid ?
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Phải có ít nhất 1 ký tự</Text>
                        </Animatable.View>
                        : null
                }
                <View style={styles.inputContainer}>
                    <View style={styles.iconStyle}>
                        <Feather
                            name="lock"
                            color={color.orange}
                            size={25}
                        />
                    </View>
                    <TextInput
                        style={styles.input}
                        placeholder='Password'
                        autoCorrect={false}
                        autoCapitalize="none"
                        secureTextEntry={showPass}
                        value={password}
                        onChangeText={(password) => {
                            setPassword(password);
                            handleChangePassWord(password);
                        }}
                    />
                    <TouchableOpacity>
                        {
                            showPass === true ?
                                <Feather
                                    onPress={() => setShowPass(!showPass)}
                                    name="eye-off"
                                    color={color.grey4}
                                    size={25}
                                    style={styles.iconRightStyle}
                                /> :
                                <Feather
                                    onPress={() => setShowPass(!showPass)}
                                    name="eye"
                                    color={color.grey1}
                                    size={25}
                                    style={styles.iconRightStyle}
                                />
                        }
                    </TouchableOpacity>

                </View>
                {
                    isPassValid ?
                        <Animatable.View animation="fadeInLeft" duration={500}>
                            <Text style={styles.errorMsg}>Phải có ít nhất 4 ký tự</Text>
                        </Animatable.View>
                        : null
                }
            </View>
            <FormButton
                buttonTitle="Sign In"
                onPress={() => {
                    handleLogin(data);
                    setIsLoading(true);
                }}
            />


        </ScrollView>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50,
    },
    headerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        marginBottom: windowHeight * 0.03,
        height: windowHeight * 0.28,
        width: windowWidth * 0.38,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'BLKCHCRY',
        fontSize: 28,
        marginBottom: 10,
        color: '#ff7700',
        marginBottom: windowHeight * 0.1,
    },
    input: {
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily: 'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: 18,
        marginBottom: 5,
        width: '100%',
        height: windowHeight / 7,
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle: {
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    iconRightStyle: {
        marginTop: 7,
        padding: 10,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        width: 50,
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 30,
    },
    navButtonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Leto-Regular',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
        justifyContent: "flex-start",
    },
})