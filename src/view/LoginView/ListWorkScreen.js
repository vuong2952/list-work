/* eslint-disable prettier/prettier */
import { Button, Card } from '@rneui/themed';
import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, ScrollView, TextInput, TouchableOpacity, Dimensions, Platform, ActivityIndicator } from 'react-native';
import { Input, Icon, Text, Badge } from '@rneui/themed';
import { windowHeight, windowWidth } from '../../utils/Dimension';
import color from '../../config/color';
import axios from 'axios'
import Spinner from 'react-native-loading-spinner-overlay/lib';
import Indi from '../../components/indicators'

const ListWorkScreen = ({ navigation, route }) => {
    const [isLoading, setIsLoading] = useState(false)
<<<<<<< HEAD
    const {data, bill_id, car } = route.params;
    // const stage = data.stages;
    console.log('data', data);
    console.log('bill_id',bill_id);
=======
    const data = route.params.item
    const stage = route.params.val
>>>>>>> main

    useEffect(() => {
        const header = () => {
            data && navigation.setOptions({ title: car.plate })
        }
        header()
    },[])

    const handleUpdate = (bill_id, stage_id, equipment_id, code) => {
        Indi.show()
        // setIsLoading(true);
        axios.post('/process/list/update', {
            bill_id: bill_id,
            stage_id: stage_id,
            equipment_id: equipment_id,
            code: code
        }).then(res => {
            Indi.show()
            setTimeout(() => {
                Indi.show(false)
                navigation.navigate("ListWork")
            }, 500)
            // setIsLoading(false);
            console.log("Updated success")

        })
    }

    return <View style={Style.container}>
        < View >
            < ScrollView style={{ marginBottom: 60 }}>
                <View style={{ flex: 1 }}>
                    {
<<<<<<< HEAD
                        // stage && Object.entries(stage).map(item =>
                            Object.entries(data[1].equipment).map(key => (
                                console.log('key',key[1].id),
                                <Card containerStyle={Style.card} wrapperStyle={{}} >
                                    <Text h3 style={{ padding: 5, height: 50, textAlign: 'center' }}>{key[1].name}</Text>
                                    <View style={Style.listItemInnerContentView}>
=======
                        Object.entries(stage[1].equipment).map(key => (
                            <Card containerStyle={Style.card} wrapperStyle={{}} key={key[0]}>
                                <View style={Style.listItemInnerContentView}>
                                    <Text h3 style={{ flex: 1, textAlign: 'center', }}>{key[1].name}</Text>
                                    <View>
>>>>>>> main
                                        {key[1].status_process === 'start' ? null : key[1].status_process === 'pause' ? null :
                                            key[1].status_process === 'error' ? null : key[1].status_process === 'resume' ? null :
                                                key[1].status_process === 'finish' ? null :
                                                    < Button title="Bắt đầu thực thi"
                                                        buttonStyle={{ backgroundColor: color.started }}
                                                        containerStyle={Style.button}
                                                        titleStyle={Style.buttonText}
<<<<<<< HEAD
                                                        onPress={() => handleUpdate(bill_id, data[0], key[1].id, 'start')} />}
=======
                                                        onPress={() => handleUpdate(data.bill_id, stage[0], key[1].id, 'start')} />}
>>>>>>> main

                                        {key[1].status_process === 'pause' ? null : key[1].status_process === undefined ? null :
                                            key[1].status_process === 'error' ? null : key[1].status_process === 'finish' ? null :
                                                <Button title="Tạm dừng"
                                                    buttonStyle={{ backgroundColor: color.paused }}
                                                    containerStyle={Style.button}
                                                    titleStyle={Style.buttonText}
<<<<<<< HEAD
                                                    onPress={() => handleUpdate(bill_id, data[0], key[1].id, 'pause')} />}
=======
                                                    onPress={() => handleUpdate(data.bill_id, stage[0], key[1].id, 'pause')} />}
>>>>>>> main

                                        {key[1].status_process === 'start' ? null : key[1].status_process === undefined ? null :
                                            key[1].status_process === 'finish' ? null : key[1].status_process === 'resume' ? null :
                                                <Button title="Tiếp tục"
                                                    buttonStyle={{ backgroundColor: color.started }}
                                                    containerStyle={Style.button}
                                                    titleStyle={Style.buttonText}
<<<<<<< HEAD
                                                    onPress={() => handleUpdate(bill_id, data[0], key[1].id, 'resume')} />}
=======
                                                    onPress={() => handleUpdate(data.bill_id, stage[0], key[1].id, 'resume')} />}
>>>>>>> main

                                        {key[1].status_process === 'error' ? null : key[1].status_process === undefined ? null :
                                            key[1].status_process === 'pause' ? null : key[1].status_process === 'finish' ? null :
                                                <Button title="Gặp sự cố"
                                                    buttonStyle={{ backgroundColor: color.error }}
                                                    containerStyle={Style.button}
                                                    titleStyle={Style.buttonText}
<<<<<<< HEAD
                                                    onPress={() => handleUpdate(bill_id, data[0], key[1].id, 'error')} />}
=======
                                                    onPress={() => handleUpdate(data.bill_id, stage[0], key[1].id, 'error')} />}
>>>>>>> main
                                        {key[1].status_process === 'finish' ? null : key[1].status_process === undefined ? null :
                                            <Button title="Hoàn thành"
                                                buttonStyle={{ backgroundColor: color.finished }}
                                                containerStyle={Style.button}
                                                titleStyle={Style.buttonText}
<<<<<<< HEAD
                                                onPress={() => handleUpdate(bill_id, data[0], key[1].id, 'finish')} />}
                                        {key[1].status_process === 'finish'?
=======
                                                onPress={() => handleUpdate(data.bill_id, stage[0], key[1].id, 'finish')} />}
                                        {key[1].status_process === 'finish' ?
>>>>>>> main
                                            <Button title="Đã hoàn thành"
                                                containerStyle={Style.button}
                                                titleStyle={Style.buttonText}
                                                disabled
                                                disabledStyle={{ backgroundColor: color.finished }}
                                                disabledTitleStyle={{ color: 'white' }}
                                            /> : null}
                                    </View>
<<<<<<< HEAD
                                </Card>
                            ))
                            // )
=======
                                </View>
                            </Card>
                        ))
>>>>>>> main
                    }
                </View>
            </ScrollView>
        </View >
    </View >
}
export default ListWorkScreen

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    listItemInnerContentView: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
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
        // width: '100%',
        marginHorizontal: 5,
        marginVertical: 5,
        borderRadius: 5,
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