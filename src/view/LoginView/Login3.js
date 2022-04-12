/* eslint-disable prettier/prettier */
import React, {useContext, useState} from 'react';
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

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [checkData, setCheckData] = useState(null);
  const [isValid, setIsValid] = useState(false);

  // const textInputChange = (val) => {
  //   console.log(val)
  //   if (val.length !== 0) {
  //     setCheckData('check');
  //     setIsValid(true)
  //   }
  //   else {
  //     setCheckData(null);
  //   }
  // };

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
        onChangeText={(userEmail, val) => {
          setEmail(userEmail)
          textInputChange(val);
        }}
        placeholderText="Email"
        iconType="user"
        // iconRight={checkData}
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        isTextValid={isValid}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        // iconRight="eye"
        secureTextEntry={true}
        // isPassValid='true'
      />

      <FormButton
        buttonTitle="Sign In"
        // onPress={() => login(email, password)}
      />

      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* {Platform.OS === 'android' ? (
        <View>
          <SocialButton
            buttonTitle="Sign In with Facebook"
            btnType="facebook"
            color="#4867aa"
            backgroundColor="#e6eaf4"
            onPress={() => fbLogin()}
          />

          <SocialButton
            buttonTitle="Sign In with Google"
            btnType="google"
            color="#de4d41"
            backgroundColor="#f5e7ea"
            onPress={() => googleLogin()}
          />
        </View>
      ) : null} */}

      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Register')}
        >
        <Text style={styles.navButtonText}>
          Don't have an acount? Create here
        </Text>
      </TouchableOpacity>
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
