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
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.undefined, height: 20, borderRadius: 7}}>Chưa xác nhận</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.started, height: 20, borderRadius: 7}}>Đang thực thi</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.paused, height: 20, borderRadius: 7}}>Tạm dừng</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.error, height: 20, borderRadius: 7}}>Gặp sự cố</Text>
            <Text style={{ fontSize: 13, color: 'white', backgroundColor: color.finished, height: 20, borderRadius: 7}}>Hoàn thành</Text>
        </View>
        <ScrollView style={{ marginBottom: 60}}>
            <View>
                {
                    data && data.map((item, index) => (
                        <Card containerStyle={Style.card} wrapperStyle={{}}>
                            <Text h4 style={{ textAlign: 'center' }}>{(item.car.plate)}</Text>
                            <Badge textStyle={{ fontSize: 14, textAlign: 'center' }}
                                value={(item.car.attribute.name) + ' - ' + (item.car.customer.name)}></Badge>
                            {
                                Object.entries(item.stages).map(key => (
                                    <View style={Style.listItemInnerContentView}
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
        flexWrap: "wrap",
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
        borderRadius: 10,
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