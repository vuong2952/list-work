/* eslint-disable prettier/prettier */
import { Text, Badge, ListItem, Button, Card } from '@rneui/base';
import React from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import FormButton from '../../components/FormButton';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    useColorScheme,
    View,

} from 'react-native';
import Profile from './Profile';
import CustomHeader from '../../components/CustomHeader';


const ListWork = ({ navigation }) => {

    const list1 = [
        {
            title: 'Sơn',
            status: '1',
        },
        {
            title: 'Rửa xe',
            status: '4',
        },
    ];
    const list2 = [
        {
            title: 'Thay dầu',
            status: '1',
        },
        {
            title: 'Rửa xe',
            status: '3',
        },
    ];

    return <View style={Style.container}>
        <View>
            <Text h2 style={{ textAlign: 'center' }}>Danh sách dịch vụ</Text>
        </View>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray' }} value="Chưa xác nhận" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'blue' }} value="Đang tiến hành" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'orange' }} value="Tạm dừng" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'red' }} value="Gặp sự cố" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'green' }} value="Hoàn thành" />
        </View>
        <ScrollView >
            <View>
                <Card style={{ width: '100%' }}>
                    <Text h4 style={{ textAlign: 'center' }}>BX 102147</Text>
                    <Badge textStyle={{ fontSize: 14, textAlign: 'center', textAlign: 'center' }} value="K5 MRB112" />
                    {
                        list1.map((i, e) => (
                            <TouchableOpacity onPress={() => {
                                navigation.navigate('DetailListWorkScreen', {title: i.title, status: i.status})
                                }} >
                                <View style={Style.listItemInnerContentView} backgroundColor={i.status === 0 ? 'gray' : i.status === '1' ? 'blue' : i.status === '2' ? 'orange' : i.status === '3' ? 'red' : 'green'} key={e}>
                                    <Text style={Style.TextStyle} >{i.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }
                </Card>

            </View>
            <View>
                <Card style={{ width: '100%' }} >
                    <Text h4 style={{ textAlign: 'center' }}>BX 888888</Text>
                    <Badge textStyle={{ fontSize: 14, textAlign: 'center', textAlign: 'center' }} value="K3 G63LN" />
                    {
                        list2.map((i, e) => (
                            <View style={Style.listItemInnerContentView} backgroundColor={i.status === 0 ? 'gray' : i.status === '1' ? 'blue' : i.status === '2' ? 'orange' : i.status === '3' ? 'red' : 'green'} key={e}>
                                <Text style={Style.TextStyle} >{i.title}</Text>
                            </View>
                        ))
                    }
                </Card>
            </View >
        </ScrollView >


        {/* <FormButton
            buttonTitle="Profile"
            // onPress={() => login(email, password)}
            onPress={() => navigation.navigate('Profile')}
        /> */}
    </View >;

};

export default ListWork;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    badge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        marginBottom: 40,
    },
    listItemInnerContentView: {
        marginTop: 18,
        width: '100%',
        height: windowHeight / 7,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        flex: 1,
        alignContent: 'center',

    },
    TextStyle: {
        fontSize: 22,
        color: 'white',
        fontWeight: '400',
    },
});
