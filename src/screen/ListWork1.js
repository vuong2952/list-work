/* eslint-disable prettier/prettier */
import { Text, Badge, ListItem, Button, Card} from '@rneui/base';
import React, { useEffect, useState, useCallback } from 'react';
import { windowHeight, windowWidth } from '../utils/Dimension';
import FormButton from '../components/FormButton';
import color from '../config/color';

import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Profile from './Profile2';
import CustomHeader from '../components/CustomHeader';
import * as Async from '../navigation/Apis'
import axios from 'axios'
import data from './Login'


const ListWork = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [work, setWork] = useState({});

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            axios.post("/process/list")
            .then(res => {
                setData(res.data.data)
                console.log("1234")
            }).catch(err => {
                alert("ERROR")
                console.log(err)
            })
          });
          return loadData;
    }, [navigation])

    console.log(data)
    return <View style={Style.container}>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray', height: 20 }} value="Chưa xác nhận" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'blue', height: 20 }} value="Đang thực hiện" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'orange', height: 20 }} value="Tạm dừng" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'red', height: 20 }} value="Gặp sự cố" />
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'green', height: 20 }} value="Hoàn thành" />
        </View>
        <ScrollView style={{ marginBottom: 60 }}>
            <View>
                {data.map((item, index) => (
                    <Card containerStyle={{ borderColor: 'black', borderRadius: 10, backgroundColor: '#eaeae1' }} wrapperStyle={{}}>
                        <Text h4 style={{ textAlign: 'center' }}>{(item.car.plate)}</Text>
                        <Badge textStyle={{ fontSize: 14, textAlign: 'center' }}
                            value={(item.car.attribute.name) + ' - ' + (item.car.customer.name)} />
                        {
                            Object.entries(item.stages).map(key => (
                                <View style={Style.listItemInnerContentView}
                                    backgroundColor={key[1].status_process === 'nstarted' ? 'gray' :
                                        key[1].status_process === 'started' ? color.started :
                                            key[1].status_process === 'paused' ? color.paused :
                                                key[1].status_process === 'error' ? color.error :
                                                    key[1].status_process === 'finished' ? color.finished : 'gray'}>
                                    <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen', {
                                        bill_id: item.bill_id,
                                        stage: key,
                                    })} style={{ width: '100%', alignItems: 'center' }}>
                                    {/* backgroundColor={key[1].status_process === undefined ? color.undefined
                                        : key[1].status_process === 'nstarted' ? color.undefined
                                            : key[1].status_process === 'started' ? color.started
                                                : key[1].status_process === 'paused' ? color.paused
                                                    : key[1].status_process === 'error' ? color.error : color.finished} >
                                    <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen', item)} style={{ width: '100%', alignItems: 'center' }}> */}
                                        <Text style={Style.TextStyle} >{key[1].name}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))
                        }
                    </Card>
                ))}
            </View>
            {/* <Button title='Next' onPress={() => navigation.navigate('ListWorkScreen')}></Button> */}
        </ScrollView >
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
        borderColor: color.grey1,
    },
    TextStyle: {
        fontSize: 22,
        color: 'white',
        fontWeight: '400',
    },
});
