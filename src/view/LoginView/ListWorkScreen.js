/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Button, Card } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Input, Icon, Text, Badge } from '@rneui/themed';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import color from '../../config/color';
import axios from 'axios'

const ListWorkScreen = ({ navigation, route }) => {
    // const [data, setData] = useState(route.params)
    // const [stage, setStage] = useState({})
    const data = route.params
    const stage = data.stages

    const handleUpdate = (bill_id, stage_id, equipment_id, code) => {
        axios.post('/process/list/update', {
            bill_id: bill_id,
            stage_id: stage_id,
            equipment_id: equipment_id,
            //         code: status_process,
            //     })
            // }
            // console.log('item', bill_id);
            // console.log('stage', stage);
            // // console.log('sta', dataStage)




            // return <View style={Style.container}>
            //     <View style={Style.badge}>
            //         <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray', height: 20 }} value="Chưa xác nhận" />
            //         <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'blue', height: 20 }} value="Đang thực hiện" />
            //         <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'orange', height: 20 }} value="Tạm dừng" />
            //         <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'red', height: 20 }} value="Gặp sự cố" />
            //         <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'green', height: 20 }} value="Hoàn thành" />
            code: code
        }).then(res => {
            console.log("Updated success")
            navigation.navigate("ListWork")
        })
    }

    return <View style={Style.container}>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray', height: 20 }} value='Chưa xác nhận'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.started, height: 20 }} value='Đang thực thi'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.paused, height: 20 }} value='Tạm dừng'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.error, height: 20 }} value='Gặp sự cố'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.finished, height: 20 }} value='Hoàn thành'></Badge>
        </View>
        <ScrollView style={{ marginBottom: 60 }}>
            <View>
                {
                    // stage[1].equipment.map((key, e) => (
                    // <Card containerStyle={{ borderColor: 'black', borderRadius: 10, }} wrapperStyle={{}} >
                    // <Text h4 style={{
                    //     padding: 5, height: 40, borderRadius: 10, textAlign: 'center',
                    //     backgroundColor: (key[1].status_process === undefined ? 'gray' :
                    //         key[1].status_process === 'start' ? color.started :
                    //             key[1].status_process === 'pause' ? color.paused :
                    //                 key[1].status_process === 'error' ? color.error :
                    //                     key[1].status_process === 'resume' ? color.started : color.finished)
                    // }}>{key[1].name}</Text>
                    // <View style={Style.listItemInnerContentView}>
                    //     {key[1].status_process === 'start' ? null : key[1].status_process === 'pause' ? null :
                    //         key[1].status_process === 'error' ? null : key[1].status_process === 'resume' ? null :
                    //             < Button title="Bắt đầu thực thi"
                    //                 buttonStyle={{
                    //                     backgroundColor: color.started,
                    //                     borderRadius: 3,
                    //                 }}
                    //                 containerStyle={{
                    //                     width: 200,
                    //                     marginHorizontal: 5,
                    //                     marginVertical: 5,
                    //                 }} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'start')} />}

                    //     {key[1].status_process === 'pause' ? null : key[1].status_process === undefined ? null :
                    //         key[1].status_process === 'error' ? null : <Button title="Tạm dừng"
                    //             buttonStyle={{
                    //                 backgroundColor: color.paused,
                    //                 borderRadius: 3,
                    //             }}
                    //             containerStyle={{
                    //                 width: 200,
                    //                 marginHorizontal: 5,
                    //                 marginVertical: 5,
                    //             }} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'pause')} />}

                    //     {key[1].status_process === 'start' ? null : key[1].status_process === undefined ? null :
                    //         key[1].status_process === 'finish' ? null : key[1].status_process === 'resume' ? null :
                    //             <Button title="Tiếp tục"
                    //                 buttonStyle={{
                    //                     backgroundColor: color.started,
                    //                     borderRadius: 3,
                    //                 }}
                    //                 containerStyle={{
                    //                     width: 200,
                    //                     marginHorizontal: 5,
                    //                     marginVertical: 5,
                    //                 }} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'resume')} />}

                    //     {key[1].status_process === 'error' ? null : key[1].status_process === undefined ? null :
                    //         key[1].status_process === 'pause' ? null : <Button title="Gặp sự cố"
                    //             buttonStyle={{
                    //                 backgroundColor: color.error,
                    //                 borderRadius: 3,
                    //             }}
                    //             containerStyle={{
                    //                 width: 200,
                    //                 marginHorizontal: 5,
                    //                 marginVertical: 5,
                    //             }} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'error')} />}
                    //     {key[1].status_process === 'finish' ? null : key[1].status_process === undefined ? null : <Button title="Hoàn thành"
                    //         buttonStyle={{
                    //             backgroundColor: color.finished,
                    //             borderRadius: 3,
                    //         }}
                    //         containerStyle={{
                    //             width: 200,
                    //             marginHorizontal: 5,
                    //             marginVertical: 5,
                    //         }} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'finish')} />}
                    // </View>
                    stage && Object.entries(stage).map(item =>
                        Object.entries(item[1].equipment).map(key => (
                            <Card containerStyle={{ borderColor: 'black', borderRadius: 10, backgroundColor: '#eaeae1'}} wrapperStyle={{}} >
                                <Text h4 style={{
                                    padding: 5, height: 40, borderRadius: 10, textAlign: 'center',
                                    backgroundColor: (key[1].status_process === undefined ? 'gray' :
                                        key[1].status_process === 'start' ? color.started :
                                            key[1].status_process === 'pause' ? color.paused :
                                                key[1].status_process === 'error' ? color.error :
                                                    key[1].status_process === 'resume' ? color.started : color.finished)
                                }}>{key[1].name}</Text>
                                <View style={Style.listItemInnerContentView}>
                                    {key[1].status_process === 'start' ? null : key[1].status_process === 'pause' ? null :
                                        key[1].status_process === 'error' ? null : key[1].status_process === 'resume' ? null :
                                            < Button title="Bắt đầu thực thi"
                                                buttonStyle={{
                                                    backgroundColor: color.started,
                                                    borderRadius: 10,
                                                }}
                                                containerStyle={Style.subItem} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'start')} />}

                                    {key[1].status_process === 'pause' ? null : key[1].status_process === undefined ? null :
                                        key[1].status_process === 'error' ? null : <Button title="Tạm dừng"
                                            buttonStyle={{
                                                backgroundColor: color.paused,
                                                borderRadius: 10,
                                            }}
                                            containerStyle={Style.subItem} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'pause')} />}

                                    {key[1].status_process === 'start' ? null : key[1].status_process === undefined ? null :
                                        key[1].status_process === 'finish' ? null : key[1].status_process === 'resume' ? null :
                                            <Button title="Tiếp tục"
                                                buttonStyle={{
                                                    backgroundColor: color.started,
                                                    borderRadius: 10,
                                                }}
                                                containerStyle={Style.subItem} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'resume')} />}

                                    {key[1].status_process === 'error' ? null : key[1].status_process === undefined ? null :
                                        key[1].status_process === 'pause' ? null : <Button title="Gặp sự cố"
                                            buttonStyle={{
                                                backgroundColor: color.error,
                                                borderRadius: 10,
                                            }}
                                            containerStyle={Style.subItem} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'error')} />}
                                    {key[1].status_process === 'finish' ? null : key[1].status_process === undefined ? null : <Button title="Hoàn thành"
                                        buttonStyle={{
                                            backgroundColor: color.finished,
                                            borderRadius: 10,
                                        }}
                                        containerStyle={Style.subItem} onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'finish')} />}
                                </View>

                            </Card>
                        )))
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
    subItem: {
        width: windowWidth/2.5,
        marginHorizontal: 5,
        marginVertical: 5,
        color: 'black'
    },
});
