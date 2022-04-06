import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

const SignUp = props => {
    return <ScrollView>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen2 Welcome Back</Text>
            <Text onPress={() => props.navigation.navigate("Login")}>Login</Text>
        </View>
    </ScrollView>
}

export default SignUp