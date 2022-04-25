/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Button, Card } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Input, Icon, Text, Badge } from '@rneui/themed';
import { windowHeight, windowWidth } from '../utils/Dimension';
import color from '../config/color';
import axios from 'axios'

const ListWorkScreen = ({ navigation, route }) => {
    const [data, setData] = useState(route.params)
    const { bill_id, stage} = useState(route.params)
    // const data = route.params
    // const stage = data.stages
    console.log(stage);

    const handleUpdate = (bill_id, stage_id, equipment_id, code) => {
        axios.post('/process/list/update', {
            bill_id: bill_id,
            stage_id: stage_id,
            equipment_id: equipment_id,
            code: code,
        }).then(res => {
            console.log("Updated success")
            navigation.navigate("ListWork")
        })
    }





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
                {
                    stage[1].equipment.map((i, e) => (
                        <Card key={e} containerStyle={{ borderColor: 'black', borderRadius: 10, backgroundColor: '#eaeae1' }} wrapperStyle={{}} >
                            <Text h4 style={{ padding: 5, height: 40, borderRadius: 10, textAlign: 'center', backgroundColor: (i.status_process === 'undefined' ? 'gray' : i.status_process === 'pause' ? color.paused : i.status_process === 'error' ? color.error : i.status_process === 'resume' ? color.started : i.status_process === 'finished' ? color.finished : 'gray') }}>{i.name}</Text>

                            <View style={Style.listItemInnerContentView}>
                                {i[1].status_process === 'start' ? null : i[1].status_process === 'pause' ? null :
                                    i[1].status_process === 'error' ? null : i[1].status_process === 'resume' ? null :
                                        < Button title="Bắt đầu thực thi"
                                            buttonStyle={{
                                                backgroundColor: color.started,
                                                borderRadius: 3,
                                            }}
                                            containerStyle={{
                                                width: 200,
                                                marginHorizontal: 5,
                                                marginVertical: 5,
                                            }} onPress={() => handleUpdate(bill_id, stage[0], i[1].id, 'start')} />}
                                {i[1].status_process === 'pause' ? null : i[1].status_process === undefined ? null :
                                    i[1].status_process === 'error' ? null : <Button title="Tạm dừng"
                                        buttonStyle={{
                                            backgroundColor: color.paused,
                                            borderRadius: 3,
                                        }}
                                        containerStyle={{
                                            width: 200,
                                            marginHorizontal: 5,
                                            marginVertical: 5,
                                        }} onPress={() => handleUpdate(bill_id, stage[0], i[1].id, 'pause')} />}

                                {i[1].status_process === 'start' ? null : i[1].status_process === undefined ? null :
                                    i[1].status_process === 'finish' ? null : i[1].status_process === 'resume' ? null :
                                        <Button title="Tiếp tục"
                                            buttonStyle={{
                                                backgroundColor: color.started,
                                                borderRadius: 3,
                                            }}
                                            containerStyle={{
                                                width: 200,
                                                marginHorizontal: 5,
                                                marginVertical: 5,
                                            }} onPress={() => handleUpdate(bill_id, stage[0], i[1].id, 'resume')} />}

                                {i[1].status_process === 'error' ? null : i[1].status_process === undefined ? null :
                                    i[1].status_process === 'pause' ? null : <Button title="Gặp sự cố"
                                        buttonStyle={{
                                            backgroundColor: color.error,
                                            borderRadius: 3,
                                        }}
                                        containerStyle={{
                                            width: 200,
                                            marginHorizontal: 5,
                                            marginVertical: 5,
                                        }} onPress={() => handleUpdate(bill_id, stage[0], i[1].id, 'error')} />}
                                {i[1].status_process === 'finish' ? null : i[1].status_process === undefined ? null : <Button title="Hoàn thành"
                                    buttonStyle={{
                                        backgroundColor: color.finished,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }} onPress={() => handleUpdate(bill_id, stage[0], i[1].id, 'finish')} />}
                            </View>

                        </Card>
                    ))
                }
            </View>
        </ScrollView>
    </View>;


};
export default ListWorkScreen;

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
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
    badge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,

    },
});
