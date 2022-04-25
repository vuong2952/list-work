/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Text, Badge, ListItem, Button, Card, renderNode } from '@rneui/base';
import React, { useEffect, useState } from 'react';
// import { Text, Badge, ListItem, Button, Card} from '@rneui/base';
// import React, { useEffect, useState, useCallback } from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import FormButton from '../../components/FormButton';
import color from '../../config/color';

import {
    ScrollView,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native';
import Profile from './Profile';
import * as Async from '../../navigation/Apis';
import axios from 'axios';
// import CustomHeader from '../../components/CustomHeader';
// import * as Async from '../../navigation/Apis'
// import axios from 'axios'
// import data from './Login4'


const ListWork = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [work, setWork] = useState({});

    // const renderButton = () => {

    // }

    useEffect(() => {
        axios.post('/process/list')
            .then(res => {
                setData(res.data.data);
                console.log(res.data.data[0])
            }).catch(err => {
                alert('ERROR');
                console.log(err);
            });
    }, []);
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     const loadData = navigation.addListener('focus', () => {
    //         axios.post("/process/list")
    //         .then(res => {
    //             setData(res.data.data)
    //             console.log("1234")
    //         }).catch(err => {
    //             alert("ERROR")
    //             console.log(err)
    //         })
    //       });
    //       return loadData;
    // }, [navigation])

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
                {/* {
                    data.map((i, e) => (
                        <Card containerStyle={{ borderColor: 'black', borderRadius: 10, backgroundColor: "#ccc" }} wrapperStyle={{}}>
                            <Text h4 style={{ textAlign: 'center' }}>{i.car.plate}</Text>
                            <Badge textStyle={{ fontSize: 14, textAlign: 'center' }} value={i.car.attribute.name + ' - ' + i.car.customer.name}></Badge>
                            {
                                Object.entries(i.stages).map(([key, value]) => (
                                    < View style={Style.listItemInnerContentView} backgroundColor={value.status_process === '0' ? color.grey4 : value.status_process === 'nstarted' ? color.blue1 : value.status_process === '2' ? color.orange1 : value.status_process === '3' ? 'red' : color.secondary2} >
                                        <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen')} style={{ width: '100%', alignItems: 'center' }}>
                                            <Text style={Style.TextStyle} >{value.name}</Text>
                                        </TouchableOpacity>
                                    </View >
                                ))
                            }
                        </Card>
                    ))} */}
                {data.map((item, index) => (
                    <Card containerStyle={{ borderColor: 'black', borderRadius: 10, backgroundColor: '#eaeae1' }} wrapperStyle={{}}>
            {/* <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.undefined, height: 20 }} value='Chưa xác nhận'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.started, height: 20 }} value='Đang thực thi'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.paused, height: 20 }} value='Tạm dừng'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.error, height: 20 }} value='Gặp sự cố'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.finished, height: 20 }} value='Hoàn thành'></Badge>
        </View>
        <ScrollView style={{ marginBottom: 60 }}>
            <View>
                {data && data.map((item, index) => (
                    <Card containerStyle={{ borderColor: 'black', borderRadius: 10 }} wrapperStyle={{}}> */}
                        <Text h4 style={{ textAlign: 'center' }}>{(item.car.plate)}</Text>
                        <Badge textStyle={{ fontSize: 14, textAlign: 'center' }}
                            value={(item.car.attribute.name) + ' - ' + (item.car.customer.name)} />
                        {
                            Object.entries(item.stages).map(key => (
                                <View style={Style.listItemInnerContentView}
                                    // backgroundColor={key[1].status_process === 'nstarted' ? 'gray' :
                                    //     key[1].status_process === 'started' ? color.started :
                                    //         key[1].status_process === 'paused' ? color.paused :
                                    //             key[1].status_process === 'error' ? color.error :
                                    //                 key[1].status_process === 'finished' ? color.finished : 'gray'}>
                                    // <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen', {
                                    //     bill_id: item.bill_id,
                                    //     stage: key,
                                    // })} style={{ width: '100%', alignItems: 'center' }}>
                                    backgroundColor={key[1].status_process === undefined ? color.undefined
                                        : key[1].status_process === 'nstarted' ? color.undefined
                                            : key[1].status_process === 'started' ? color.started
                                                : key[1].status_process === 'paused' ? color.paused
                                                    : key[1].status_process === 'error' ? color.error : color.finished} >
                                    <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen', item)} style={{ width: '100%', alignItems: 'center' }}>
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
