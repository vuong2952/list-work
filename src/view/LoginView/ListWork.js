/* eslint-disable prettier/prettier */
import { Text, Badge, Card } from '@rneui/base';
import React, { useEffect, useState, useCallback } from 'react';
import { windowHeight, windowWidth } from '../../utils/Dimension';
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
import * as Async from '../../navigation/Apis'
import axios from 'axios'


const ListWork = ({ navigation }) => {

    const [data, setData] = useState([])

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            axios.post("/process/list")
                .then(res => {
                    setData(res.data.data)
                }).catch(err => {
                    console.log(err)
                })
        });
        return loadData;
    }, [navigation])

    return <View style={Style.container}>
        <View style={Style.badge}>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.undefined, height: 20, borderRadius: 3, paddingHorizontal: 2.5}}>Chưa xác nhận</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.started, height: 20, borderRadius: 3, paddingHorizontal: 2.5}}>Đang thực thi</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.paused, height: 20, borderRadius: 3, paddingHorizontal: 2.5}}>Tạm dừng</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.error, height: 20, borderRadius: 3, paddingHorizontal: 2.5}}>Gặp sự cố</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.finished, height: 20, borderRadius: 3, paddingHorizontal: 2.5}}>Hoàn thành</Text>
        </View>
        <ScrollView style={{ marginBottom: 60}}>
            <View>
                {
                    data && data.map((item) => (
                        <Card containerStyle={Style.card} wrapperStyle={{alignItems: "center"}}>
                            <Text h3 style={{ textAlign: 'center' }}>{(item.car.plate)}</Text>
                            <Text style={{ fontSize: 18, textAlign: 'center', backgroundColor: color.grey4, paddingHorizontal:10, borderRadius: 2 }}
                                >{(item.car.attribute.name) + ' - ' + (item.car.customer.name)}</Text>
                            {
                                Object.entries(item.stages).map(val => (
                                    <View style={Style.listItemInnerContentView}
                                        backgroundColor={val[1].status_process === undefined ? color.undefined
                                            : val[1].status_process === 'nstarted' ? color.undefined
                                                : val[1].status_process === 'started' ? color.started
                                                    : val[1].status_process === 'paused' ? color.paused
                                                        : val[1].status_process === 'error' ? color.error : color.finished} >
                                        <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen', item)} style={{ width: '100%', alignItems: 'center' }}>
                                            <Text style={Style.TextStyle} >{val[1].name}</Text>
                                        </TouchableOpacity>
                                    </View>
                                ))
                            }
                        </Card>
                    ))
                }
            </View>
        </ScrollView >
    </View >

};

export default ListWork;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // padding: 10,
    },
    badge: {
        // flexWrap: "wrap",
        marginTop: 10,
        paddingHorizontal: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    listItemInnerContentView: {
        marginTop: 18,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 7,
        flex: 1,
        alignContent: 'center',
    },
    TextStyle: {
        fontSize: 22,
        lineHeight: 40,
        color: 'white',
        fontWeight: '400',
    },
    card: {
        borderRadius: 10,
        backgroundColor: "#fffff8",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 5
    },
})