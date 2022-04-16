/* eslint-disable prettier/prettier */
import { Button, Card } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform } from 'react-native';
import { Input, Icon, Text, Badge } from '@rneui/themed';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import color from '../../config/color';

const ListWorkScreen = ({ navigation }) => {
    const list3 = [
        {
            name: 'Non',
            status: '1'

        },
        {
            name: 'Nhúng',
            status: '3'
        },
        {
            name: 'Bào',
            status: '0'
        }
    ]

    return <View style={Style.container}>
        <View style={Style.badge}>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'gray', height: 20 }} value='Chưa xác nhận'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'blue', height: 20 }} value='Đang thực hiện'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'orange', height: 20 }} value='Tạm dừng'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'red', height: 20 }} value='Gặp sự cố'></Badge>
            <Badge textStyle={{ fontSize: 12 }} badgeStyle={{ backgroundColor: 'green', height: 20 }} value='Hoàn thành'></Badge>
        </View>
        <ScrollView style={{ marginBottom: 60}}>
            <View>
                {
                    list3.map((i, e) => (
                        <Card key={e} containerStyle={{ borderColor: 'black', borderRadius: 10, }} wrapperStyle={{}} >
                            <Text h4 style={{ padding: 5,height: 40,borderRadius: 10, textAlign: 'center', backgroundColor: (i.status === '0'? color.grey4 : i.status === '1'? color.blue1 : i.status === '2' ? color.orange1 : i.status === '3' ? 'red' : color.secondary2)}}>{i.name}</Text>
                            <View style={Style.listItemInnerContentView}>
                                {i.status === '1' ? null : <Button title="Bắt đầu thực hiện"
                                    buttonStyle={{
                                        backgroundColor: color.blue1,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }} />}
                                {i.status === '2' ? null : i.status === '0' ? null : <Button title="Tạm dừng"
                                    buttonStyle={{
                                        backgroundColor: color.orange1,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }}/>}
                                {i.status === '3' ? null : i.status === '0' ? null : <Button title="Gặp sự cố"
                                    buttonStyle={{
                                        backgroundColor: 'red',
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }}/>}
                                {i.status === '4' ? null : i.status === '0' ? null : <Button title="Hoàn thành"
                                    buttonStyle={{
                                        backgroundColor: color.secondary2,
                                        borderRadius: 3,
                                    }}
                                    containerStyle={{
                                        width: 200,
                                        marginHorizontal: 5,
                                        marginVertical: 5,
                                    }}/>}
                            </View>

                        </Card>
                    ))
                }
            </View>
        </ScrollView>
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
})