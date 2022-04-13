/* eslint-disable prettier/prettier */
import React, { Component, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from '@rneui/themed';

const Inputs = (props) => {
    const [focused, isFocused] = useState(false)

    const onFocusChange = () => {
        isFocused(true)
    };

    return (
        <View
            style={[
                styles.container,
                { borderColor: focused ? '#0779ef' : '#eee' },
            ]}>
            <Input
                placeholder={props.name}
                onFocus={onFocusChange}
                inputContainerStyle={styles.inputContainer}
                inputStyle={styles.inputText}
                secureTextEntry={props.pass}
                leftIcon={
                    <Icon
                        name={props.icon}
                        size={22}
                        color={focused ? '#0779e4' : 'grey'}
                    />
                }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '90%',
        height: 50,
        borderRadius: 100,
        marginVertical: 10,
        borderWidth: 3.5,
    },
    inputContainer: {
        borderBottomWidth: 0,
        marginVertical: 0,
    },
    inputText: {
        color: '#0779e4',
        fontWeight: 'bold',
        marginLeft: 5,
    },
});

export default Inputs;
