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
import FormCheckBox from '../../components/FromCheckBox';
import SocialButton from '../../components/SocialButton';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import Feather from 'react-native-vector-icons/Feather';
// import {AuthContext} from '../navigation/AuthProvider';

const LoginScreen = ({ navigation }) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [checkUser, setCheckUser] = useState(null);
  const [isValid, setIsValid] = useState(false);
  const [isPassValid, setIsPassValid] = useState(false);
  const [secure, setSecure] = useState(true)
  const [check1, setCheck1] = useState(false);

  const textInputChange = (val) => {
    console.log(val);
    if (val.length === 0) {
      setIsValid(true);
      setCheckUser(null);
    }
    else {
      setCheckUser('check');
      setIsValid(false);
    }
    console.log(isValid);
  };
  const checkPassValid = (val) => {
    if (val.length <= 4) {
      setIsPassValid(true);
    }
    else {
      setIsPassValid(false);
    }
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
        labelValue={userName}
        onChangeText={(userName) => {
          setUserName(userName);
          textInputChange(userName);
        }}
        placeholderText="Username"
        iconType="user"
        iconRight={checkUser}
        // keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        isTextValid={isValid}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => {
          setPassword(userPassword);
          checkPassValid(userPassword);
        }}
        placeholderText="Password"
        iconType="lock"
        // iconRight="eye-off"
        // secureTextEntry={true}
        isSecure={secure}
        isPassValid={isPassValid}
      />

      <FormCheckBox
        labelValue="hiển thị mật khẩu"
        checked={true}
        onPress={() => {
          setCheck1(!check1);
          setSecure(!secure);
        }}
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
  iconStyleRight: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#ccc',
    width: 50,
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
