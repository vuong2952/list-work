/* eslint-disable prettier/prettier */
import { Text, Badge, ListItem } from '@rneui/base';
import React from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    
    useColorScheme,
    View,
    Button
} from 'react-native';

const ListWork = props => {

    const list = [
        {
            title: 'Sơn',
            status: '1',
        },
        {
            title: 'Rửa xe',
            status: '2',
        }
    ]

    return <View style={Style.container}>
        <View style={{alignItems: 'center'}}>
            <Text h2 style={{justifyContent: 'center'}}>Danh sách dịch vụ</Text>
        </View>
        <View style={Style.badge}>
            <Badge textStyle={{fontSize: 12}} badgeStyle={{ backgroundColor: 'gray' }} value='Chưa xác nhận'></Badge>
            <Badge textStyle={{fontSize: 12}} badgeStyle={{ backgroundColor: 'blue' }} value='Đang tiến hành'></Badge>
            <Badge textStyle={{fontSize: 12}} badgeStyle={{ backgroundColor: 'orange' }} value='Tạm dừng'></Badge>
            <Badge textStyle={{fontSize: 12}} badgeStyle={{ backgroundColor: 'red' }} value='Gặp sự cố'></Badge>
            <Badge textStyle={{fontSize: 12}} badgeStyle={{ backgroundColor: 'green' }} value='Hoàn thành'></Badge>
        </View>
        <ScrollView>
            {
                list.map((i, e) => (
                    <View style={Style.listItemInnerContentView} backgroundColor={i.status === '1' ? 'blue' : 'red'} key={e}>
                        <Text style={Style.TextStyle} >{i.title}</Text>
                    </View>
                ))
            }
        </ScrollView >
    </View >

}

export default ListWork

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
    }
})