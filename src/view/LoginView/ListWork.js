/* eslint-disable prettier/prettier */
import { Text, Badge, ListItem, Button, Card, renderNode } from '@rneui/base';
import React, { useEffect, useState } from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import FormButton from '../../components/FormButton';
import color from '../../config/color'

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
import * as Async from '../../navigation/Apis'
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const ListWork = ({ navigation }) => {

    const [data, setData] = useState([])
    const [work, setWork] = useState({})

    useEffect(() => {
        axios.post("/process/list")
            .then(res => {
                setData(res.data.data)
            }).catch(err => {
                alert("ERROR")
                console.log(err)
            })
    }, [])

    return <View style={Style.container}>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray', height: 20 }} value='Chưa xác nhận'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'blue', height: 20 }} value='Đang thực hiện'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'orange', height: 20 }} value='Tạm dừng'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'red', height: 20 }} value='Gặp sự cố'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'green', height: 20 }} value='Hoàn thành'></Badge>
        </View>
        <ScrollView style={{ marginBottom: 60 }}>
            <View>
                {data.map((item, index) => (
                    <Card containerStyle={{ borderColor: 'black', borderRadius: 10 }} wrapperStyle={{}}>
                        <Text h4 style={{ textAlign: 'center' }}>{(item.car.plate)}</Text>
                        <Badge textStyle={{ fontSize: 14, textAlign: 'center' }}
                            value={(item.car.attribute.name) + ' - ' + (item.car.customer.name)}></Badge>
                        {
                            Object.entries(item.stages).map(key => (
                                <View style={Style.listItemInnerContentView} backgroundColor={key[1].status_process === '0' ? color.grey4 : key[1].status_process === 'nstarted' ? color.blue1 : key[1].status_process === '2' ? color.orange1 : key[1].status_process === '3' ? 'red' : color.secondary2} >
                                    <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen')} style={{ width: '100%', alignItems: 'center' }}>
                                        <Text style={Style.TextStyle} >{key[1].name}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </Card>
                ))}
            </View>
        </ScrollView >
    </View >

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
