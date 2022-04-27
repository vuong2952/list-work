/* eslint-disable prettier/prettier */
import { Button, Card } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform, ActivityIndicator } from 'react-native';
import { Input, Icon, Text, Badge } from '@rneui/themed';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import color from '../../config/color';
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay/lib';

const ListWorkScreen = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false)
    const data = route.params
    const stage = data.stages

    useEffect(() => {
        const header = () => {
            data && navigation.setOptions({title : data.car.plate})
        }
        header()
    })

    const handleUpdate = (bill_id, stage_id, equipment_id, code) => {
        // setIsLoading(true);
        axios.post('/process/list/update', {
            bill_id: bill_id,
            stage_id: stage_id,
            equipment_id: equipment_id,
            code: code
        }).then(res => {
            setIsLoading(true)
            setTimeout(() => {
                setIsLoading(false)
                navigation.navigate("ListWork")
            }, 500)
            // setIsLoading(false);
            console.log("Updated success")

        })
    }

    return <View style={Style.container}>
        {
            isLoading ? (
                <Spinner visible={isLoading} />
            ) : (
                <View>
                    {/* <View style={Style.badge}>
                        <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray', height: 20 }} value='Chưa xác nhận'></Badge>
                        <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.started, height: 20 }} value='Đang thực thi'></Badge>
                        <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.paused, height: 20 }} value='Tạm dừng'></Badge>
                        <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.error, height: 20 }} value='Gặp sự cố'></Badge>
                        <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: color.finished, height: 20 }} value='Hoàn thành'></Badge>
                    </View> */}
                    <ScrollView style={{ marginBottom: 60 }}>
                        <View style={{ flex: 1 }}>
                            {
                                stage && Object.entries(stage).map(item =>
                                    Object.entries(item[1].equipment).map(key => (
                                        <Card containerStyle={Style.card} wrapperStyle={{}} >
                                            <Text h3 style={{ padding: 5, height: 50, textAlign: 'center' }}>{key[1].name}</Text>
                                            <View style={Style.listItemInnerContentView}>
                                                {key[1].status_process === 'start' ? null : key[1].status_process === 'pause' ? null :
                                                    key[1].status_process === 'error' ? null : key[1].status_process === 'resume' ? null :
                                                        key[1].status_process === 'finish' ? null :
                                                            < Button title="Bắt đầu thực thi"
                                                                buttonStyle={{ backgroundColor: color.started }}
                                                                containerStyle={Style.button}
                                                                titleStyle={Style.buttonText}
                                                                onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'start')} />}

                                                {key[1].status_process === 'pause' ? null : key[1].status_process === undefined ? null :
                                                    key[1].status_process === 'error' ? null : key[1].status_process === 'finish' ? null :
                                                        <Button title="Tạm dừng"
                                                            buttonStyle={{ backgroundColor: color.paused }}
                                                            containerStyle={Style.button}
                                                            titleStyle={Style.buttonText}
                                                            onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'pause')} />}

                                                {key[1].status_process === 'start' ? null : key[1].status_process === undefined ? null :
                                                    key[1].status_process === 'finish' ? null : key[1].status_process === 'resume' ? null :
                                                        <Button title="Tiếp tục"
                                                            buttonStyle={{ backgroundColor: color.started }}
                                                            containerStyle={Style.button}
                                                            titleStyle={Style.buttonText}
                                                            onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'resume')} />}

                                                {key[1].status_process === 'error' ? null : key[1].status_process === undefined ? null :
                                                    key[1].status_process === 'pause' ? null : key[1].status_process === 'finish' ? null :
                                                        <Button title="Gặp sự cố"
                                                            buttonStyle={{ backgroundColor: color.error }}
                                                            containerStyle={Style.button}
                                                            titleStyle={Style.buttonText}
                                                            onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'error')} />}
                                                {key[1].status_process === 'finish' ? null : key[1].status_process === undefined ? null :
                                                    <Button title="Hoàn thành"
                                                        buttonStyle={{ backgroundColor: color.finished }}
                                                        containerStyle={Style.button}
                                                        titleStyle={Style.buttonText}
                                                        onPress={() => handleUpdate(data.bill_id, item[0], key[1].id, 'finish')} />}
                                            </View>
                                        </Card>
                                    )))
                            }
                        </View>
                    </ScrollView>
                </View>
            )
        }

    </View>


}
export default ListWorkScreen

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    listItemInnerContentView: {
        marginTop: 18,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    badge: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    button: {
        width: '100%',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 10,
    },
    buttonText: {
        fontSize: 18,
        lineHeight: 35,
        fontWeight: 'bold',
        color: '#ffffff',
        fontFamily: 'Lato-Regular',
    },
    card: {
        borderRadius: 10,
        backgroundColor: "#fffff8",
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.3,
        shadowRadius: 3.84,
        elevation: 5,
        marginBottom: 5
    },
})