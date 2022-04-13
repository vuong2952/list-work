/* eslint-disable prettier/prettier */
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
import Profile from './Profile';
import CustomHeader from '../../components/CustomHeader';


const ListWork = props => {
    return (
        <ScrollView>
            {/* <CustomHeader title="List Work" isHome={true} /> */}

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Screen2</Text>
            </View>

        </ScrollView>
    )

}

export default ListWork