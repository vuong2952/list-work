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
} from 'react-native';

import FormInput from '../../components/FormInput';
import FormButton from '../../components/FormButton';
import SocialButton from '../../components/SocialButton';
import { windowHeight, windowWidth } from '../../utils/Dimension';
// import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkData, setCheckData] = useState(null);
  const [isValid, setIsValid] = useState(false);  
  const [isValidPass, setIsValidPass] = useState(false);

  const textInputChange = (val) => {
    console.log(val)
    if (val.length !== 0) {
      setCheckData('check');
      setIsValid(false)
    }
    else {
      setCheckData(null);
      setIsValid(true)
    }
  };
  const passChange = (val) => {
    if (val.length >= 6) {
      setIsValidPass(false)
    }
    else setIsValidPass(true)
  }


  //   const {login, googleLogin, fbLogin} = useContext(AuthContext);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../../components/img/NamKhanh.png')}
        style={styles.logo}
      />
      <Text style={styles.text}>Madocar</Text>

      <FormInput
        labelValue={email}
        onChangeText={(userEmail) => {
          setEmail(userEmail)
          textInputChange(userEmail);
        }}
        placeholderText="Tài khoản"
        iconType="user"
        iconRight={checkData}
        autoCapitalize="none"
        autoCorrect={false}
        isTextValid={isValid}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => {
          setPassword(userPassword)
          passChange(userPassword)
        }}
        placeholderText="Mật khẩu"
        iconType="lock"
        iconRight="eye"
        secureTextEntry={true}
        isPassValid={isValidPass}
      />

      <FormButton
        buttonTitle="Sign In"
        onPress={() => navigation.navigate('ListWork')}
      // onPress={() => login(email, password)}
      />

      {/* <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity> */}

      {/* <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Register')}
        >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity> */}
    </ScrollView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50,
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
    // marginBottom: windowHeight * 0.1,
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
});
