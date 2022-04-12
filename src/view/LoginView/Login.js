/* eslint-disable prettier/prettier */
import { Button } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Input, Icon } from '@rneui/themed';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import LinearGradient from 'react-native-linear-gradient';
import Feather from 'react-native-vector-icons/Feather';

const { height } = Dimensions.get("screen");
const height_logo = height * 0.12;
const { width } = Dimensions.get("screen");
const width_logo = width * 0.7;

// import Inputs from '../components/Inputs';
// import Submit from '../components/Submit';

const Login = props => {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* <View style={styles.header}> */}
            <Image style={{ width: width_logo, height: height_logo }}
                source={require('../../components/img/NamKhanh.png')} />
            <Text style={styles.logoText}> Welcome to Madocar!</Text>
            {/* </View>
            <View style={styles.footer}> */}
            <View style={styles.action}>
                <TextInput
                    style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Username'
                    placeholderTextColor='#333' 
                    // onSubmitEditing={() => this.password.focus()}
                    />
            </View>

            <TextInput
                style={styles.inputBox}
                underlineColorAndroid='rgba(0,0,0,0)'
                placeholder='Password'
                placeholderTextColor='#333'
                secureTextEntry={true} 
                // ref={(input) => this.password = input}
                />
            <TouchableOpacity style={styles.button1}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <View style={styles.signupTextCont}>
                <Text style={styles.signupText}>Do not have an account yet?</Text>
                <TouchableOpacity><Text style={styles.signupButton} onPress={() => props.navigation.navigate("Register")}> Signup</Text></TouchableOpacity>
            </View>
            {/* </View> */}
        </ScrollView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccc'
    },
    header: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 4,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    logoText: {
        marginVertical: 15,
        fontSize: 24,
        color: '#ff7700',
    },
    inputBox: {
        width: width_logo * 1.2,
        backgroundColor: 'rgba(255,255,255,1)',
        borderRadius: 25,
        paddingHorizontal: 16,
        color: '#000',
        marginVertical: 10,
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    // signIn: {
    //     width: '100%',
    //     height: 50,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     borderRadius: 10
    // },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
        alignItems: 'center'
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        paddingHorizontal: 30,
        fontSize: 18,
        fontWeight: 'bold',
        borderColor: '#009387',
        borderWidth: 1,
        marginTop: 15
    },
    signupTextCont: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 16,
        flexDirection: 'row'
    },
    signupText: {
        color: '#333',
        fontSize: 16
    },
    signupButton: {
        color: '#0066ff',
        fontSize: 16,
        fontWeight: '500'
    },
    button1: {
        width: width_logo * 1.2,
        backgroundColor: '#ff7700',
        borderRadius: 25,
        marginVertical: 10,
        marginTop: height_logo * 0.5,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#ffffff',
        textAlign: 'center'
    },
});

export default Login;
