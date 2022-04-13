/* eslint-disable prettier/prettier */
import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { windowHeight, windowWidth } from '../utils/Dimension';
import * as Animatable from 'react-native-animatable';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ labelValue, placeholderText, iconType, iconRight, isTextValid, isPassValid, ...rest }) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <View style={styles.iconStyle}>
          <AntDesign name={iconType} size={25} color="#666" />
        </View>
        <TextInput
          value={labelValue}
          style={styles.input}
          numberOfLines={1}
          placeholder={placeholderText}
          placeholderTextColor="#666"
          {...rest}
        />
        <View style={styles.iconStyleRight}>
          <AntDesign name={iconRight} size={25} color="#666" />
        </View>
      </View>
      {isTextValid ?
        <Animatable.View animation="fadeInLeft" duration={500}>
          <Text style={styles.errorMsg}>is not email</Text>
        </Animatable.View>
        : null
      }
      {
        isPassValid ?
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>is not Pass</Text>
          </Animatable.View>
          : null
      }

    </View>

  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    // flex: 1,
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
  iconStyleRight: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    width: 50,
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
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 1.5,
    fontSize: 24,
    borderRadius: 8,
    borderWidth: 1,
  },
  errorMsg: {
    color: '#FF0000',
    fontSize: 14,
    justifyContent: "flex-start",
  },
});
