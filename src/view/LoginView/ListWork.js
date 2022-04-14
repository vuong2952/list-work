/* eslint-disable prettier/prettier */
import { Text, Badge, ListItem, Button, Card } from '@rneui/base';
import React from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import FormButton from '../../components/FormButton';
import color from '../../config/color'

import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    useColorScheme,
    View,
    TouchableOpacity
} from 'react-native';

const ListWork = ({ navigation }) => {

    const list1 = [
        {
            title: 'BMV256',
            status: '15624',
        },
        {
            title: 'G63KL',
            status: '41312',
        },
        {
            title: 'RR235',
            status: '24564',
        },
        {
            title: 'KIA69',
            status: '37896',
        }
    ]
    const list2 = [
        {
            title: 'Sơn',
            status: '1',
        },
        {
            title: 'Rửa xe',
            status: '4',
        },
        {
            title: 'Thay dầu',
            status: '2',
        },
        {
            title: 'Rửa xe',
            status: '3',
        }
    ]

    return <View style={Style.container}>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 19 }} badgeStyle={{ backgroundColor: 'gray', height: 25 }} value='Chưa xác nhận'></Badge>
            <Badge textStyle={{ fontSize: 19 }} badgeStyle={{ backgroundColor: 'blue', height: 25 }} value='Đang thực hiện'></Badge>
            <Badge textStyle={{ fontSize: 19 }} badgeStyle={{ backgroundColor: 'orange', height: 25 }} value='Tạm dừng'></Badge>
        </View>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 19 }} badgeStyle={{ backgroundColor: 'red', height: 25 }} value='Gặp sự cố'></Badge>
            <Badge textStyle={{ fontSize: 19 }} badgeStyle={{ backgroundColor: 'green', height: 25 }} value='Hoàn thành'></Badge>
        </View>
        <ScrollView >
            <View>
                {
                    list1.map((i, e) => (
                        <Card containerStyle={{ borderColor: 'black', borderRadius: 10 }} wrapperStyle={{}} key={e}>
                            <Text h4 style={{ textAlign: 'center' }}>{i.title}</Text>
                            <Badge textStyle={{ fontSize: 14, textAlign: 'center', textAlign: 'center' }} value={i.status}></Badge>
                            {
                                list2.map((k, l) => (
                                    <View style={Style.listItemInnerContentView} backgroundColor={k.status === 0 ? 'gray' : k.status === '1' ? 'blue' : k.status === '2' ? 'orange' : k.status === '3' ? 'red' : 'green'} >
                                        <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen')}>
                                            <Text style={Style.TextStyle} >{k.title}</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }



                        </Card>
                    ))}
            </View>
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
        marginBottom: 10,

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
})