import { Button } from '@rneui/themed';
import React from 'react';
import {View, StyleSheet, Text, Image, ScrollView} from 'react-native';

import Inputs from '../components/Inputs';
import Submit from '../components/Submit';

const Login = props => {
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.container}>
                <Image 
                    source={require('../components/img/NamKhanh.png')} 
                    resizeMode="center" 
                    style={styles.image} />
                <Text style={styles.textTitle}>Welcome Gara</Text>
                <Text style={styles.textBody}>Log in to your existant account</Text>
                <View style={{marginTop: 20}} />
                <Inputs name="Email"  />
                <Inputs name="Password" pass={true} />
                {/* <View style={{width: '90%'}}>
                    <Text style={[styles.textBody], {alignSelf: 'center'}}>Forgot Password?</Text>
                </View> */}
                <Button title="LOG IN" color="#0148a4" onPress={() => props.navigation.navigate("ListWork")}/>
                <View style={{flexDirection: 'row', marginVertical: 5}}>
                    <Text style={styles.textBody}>Don't Have an account</Text>
                    <Text style={[styles.textBody, {color: 'blue'}]} onPress={() => props.navigation.navigate('SignUp')}> Sign Up</Text>
                </View>
            </View>
        </ScrollView>      
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 400,
        height: 250,
        marginVertical: 10
    },
    textTitle: {
        fontFamily: 'Foundation',
        fontSize: 40,
        marginVertical: 10,
    },
    textBody: {
        fontFamily: 'Foundation',
        fontSize: 16
    }
});

export default Login
