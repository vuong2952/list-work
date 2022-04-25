/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Button, Card } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Input, Icon, Text, Badge } from '@rneui/themed';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import color from '../../config/color';
import axios from 'axios';

const ListWorkScreen = ({ navigation, route }) => {
    const {stage,bill_id}  = route.params;
    // const [dataStage, setDataStage] = useState([stage[1].equipment])

    const list3 = [
        {
            name: 'Non',
            status: '1',

        },
        {
            name: 'Nhúng',
            status: '3',
        },
        {
            name: 'Bào',
            status: '0',
        },
    ];

    const handleUpdate = (bill_id, stage_id, equipment_id, status_process) => {
        axios.post('/process/list/update', {
            bill_id: bill_id,
            stage_id: stage_id,
            equipment_id: equipment_id,
            code: status_process,
        })
    }
    console.log('item', bill_id);
    console.log('stage', stage);
    // console.log('sta', dataStage)

    


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
                                {i.status_process === 'start' ? null : <Button title="Bắt đầu thực hiện"
                                    buttonStyle={{
                                        backgroundColor: color.started,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }} onPress={() => }/>}
                                {i.status_process === '2' ? null : i.status_process === '0' ? null : <Button title="Tạm dừng"
                                    buttonStyle={{
                                        backgroundColor: color.orange1,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }} />}
                                {i.status_process === '3' ? null : i.status_process === '0' ? null : <Button title="Gặp sự cố"
                                    buttonStyle={{
                                        backgroundColor: 'red',
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }} />}
                                {i.status_process === '4' ? null : i.status_process === '0' ? null : <Button title="Hoàn thành"
                                    buttonStyle={{
                                        backgroundColor: color.secondary2,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }} />}
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
