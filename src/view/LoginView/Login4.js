/* eslint-disable prettier/prettier */
import React, { useContext, useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    Platform,
    StyleSheet,
    ScrollView,
    TextInput,
} from 'react-native';

import FormInput from '../../components/FormInput';
import color from '../../config/color';
import FormButton from '../../components/FormButton';
import FormCheckBox from '../../components/FromCheckBox';
import SocialButton from '../../components/SocialButton';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { setStorage } from '../../navigation/Apis'
import axios from 'axios';

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [checkUser, setCheckUser] = useState('');
    const [userValid, setUserValid] = useState(false);
    const [isPassValid, setIsPassValid] = useState(false);
    const [showPass, setShowPass] = useState(true);

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setCheckUser('check');
            setUserValid(false);
        }
        else {
            setCheckUser(null);
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
    const handleLogin = () => {
        axios.post('http://nk.ors.vn/mobile/api/login', {
            username: username,
            password: password
        })
            .then((response) => {
                console.log('res', response.data.data.token,)
                setStorage(response.data.data.token, response.data.data.name, response.data.data.username, response.data.data.address)
                if (response.data.data.token.length > 0) navigation.navigate("HomeApp")
                else alert("Lỗi không đăng nhập được!");
            })
            .catch((error) => {
                console.log("Lỗi không đăng nhập được!")
            });
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.headerContainer}>
                <Image
                    source={require('../../components/img/NamKhanh.png')}
                    style={styles.logo}
                />
                <Text style={styles.text}>Madocar</Text>
            </View>
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
                <Feather
                    name={checkUser}
                    color={color.secondary2}
                    size={25}
                    style={styles.iconRightStyle}
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
            <FormButton
                buttonTitle="Sign In"
                onPress={() => handleLogin()}
            // onPress={() => navigation.navigate('HomeApp')}
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
        fontFamily: 'Kufam-SemiBoldItalic',
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
        borderRadius: 10,
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