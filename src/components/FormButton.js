/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { windowHeight } from '../utils/Dimension';

const FormButton = ({ buttonTitle, ...rest }) => {
  return (
    <TouchableOpacity style={styles.buttonContainer} {...rest}>
      <Text style={styles.buttonText}>{buttonTitle}</Text>
    </TouchableOpacity>
  );
};

export default FormButton;

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 18,
    width: '100%',
    height: windowHeight / 7,
    backgroundColor: '#ff7700',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Lato-Regular',
  },
});
