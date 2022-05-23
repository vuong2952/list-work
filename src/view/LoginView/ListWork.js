/* eslint-disable prettier/prettier */
import { Text, Badge, Card, ListItem } from '@rneui/themed';
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
    const [expanded, setExpanded] = useState(null);

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            axios.post("/process/list")
                .then(res => {
                    setData(res.data.data)
                }).catch(err => {
                    console.log('Error ...', err)
                })
        });
        return loadData;
    }, [navigation])

    return <View style={Style.container}>
        <View style={Style.badge}>
            <Text style={{ fontSize: 15, color: 'white', backgroundColor: color.red, height: 20, borderRadius: 3, paddingHorizontal: 2.5 }}>Gặp sự cố</Text>
            <Text style={{ fontSize: 15, color: 'white', backgroundColor: color.success, height: 20, borderRadius: 3, paddingHorizontal: 2.5 }}>Hoàn thành</Text>
            <Text style={{ fontSize: 15, color: 'white', backgroundColor: color.yellow, height: 20, borderRadius: 3, paddingHorizontal: 2.5 }}>Tạm dừng</Text>
        </View>
        <View style={Style.badge}>
            <Text style={{ fontSize: 15, color: 'white', backgroundColor: color.grey1, height: 20, borderRadius: 3, paddingHorizontal: 2.5, }}>Chưa xác nhận</Text>
            <Text style={{ fontSize: 15, color: 'white', backgroundColor: color.blue, height: 20, borderRadius: 3, paddingHorizontal: 2.5 }}>Đang thực thi</Text>
        </View>
        <ScrollView style={{ marginBottom: 60 }}>
            <View>
                {
                    data && data.map((item, index) => (
                        <Card containerStyle={Style.card} key={index}>
                            <TouchableOpacity style={{ backgroundColor: color.grey }} onPress={() => {
                                setExpanded(index === expanded ? "" : index)
                            }}>
                                <Text h3 style={{ textAlign: 'center', color: color.primary, padding: 5 }}>{item.car.plate}</Text>
                                <Text style={{ color: 'white', fontSize: 18, textAlign: 'center', backgroundColor: color.primary, paddingHorizontal: 10, borderRadius: 2, padding: 5 }}
                                >{(item.car.attribute.name) + ' - ' + (item.car.customer.name)}</Text>
                            </TouchableOpacity>
                            <View style={{ paddingHorizontal: 10 }}>
                                {
                                    Object.entries(item.stages).map(val => (
                                        index === expanded ? <View style={Style.listItemInnerContentView} key={val[0]}
                                            backgroundColor={val[1].status_process === undefined ? color.grey1
                                                : val[1].status_process === 'nstarted' ? color.grey1
                                                    : val[1].status_process === 'started' ? color.blue
                                                        : val[1].status_process === 'paused' ? color.yellow
                                                            : val[1].status_process === 'error' ? color.red : color.success} >

                                            <TouchableOpacity onPress={() => navigation.navigate('ListWorkScreen', { val, item })} style={{ width: '100%', alignItems: 'center' }}>
                                                <Text style={Style.TextStyle} >{val[1].name}</Text>
                                            </TouchableOpacity>
                                        </View> : null
                                    ))
                                }</View>
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
        justifyContent: 'space-around',
        marginBottom: 10,
    },
    listItemInnerContentView: {
        marginTop: 18,
        width: '100%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
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