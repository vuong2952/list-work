/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { CheckBox } from '@rneui/themed';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimension';
import * as Animatable from 'react-native-animatable';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';

const FormCheckBox = ({ labelValue, check, ...rest }) => {
    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <CheckBox
                    containerStyle={styles.checkBox}
                    title={labelValue}
                    // checked={check}
                    iconRight
                />
            </View>
        </View>


    );
};

export default FormCheckBox;

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        // flex: 1,
    },

    inputContainer: {

        // marginTop: 18,
        // marginBottom: 5,
        // width: '100%',
        // height: windowHeight / 7,
        // borderColor: '#ccc',
        // borderRadius: 10,
        // borderWidth: 1,
        // flexDirection: 'row',
        // alignItems: 'center',
        // backgroundColor: '#fff',
    },

    checkBox: {
    },
});
