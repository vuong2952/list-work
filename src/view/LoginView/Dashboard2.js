/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react';
import color from '../../config/color';
import { Avatar, Card } from '@rneui/themed';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import WorkCard from '../../components/WorkCard/WorkCard';

const Dashboard2 = ({ navigation }) => {

    const [data, setData] = useState([])

    // useEffect(() => {
    //     const storage = async () => {
    //         let items = await AsyncStorage.getItem("user");
    //         console.log(items)
    //         setData(JSON.parse(items))
    //     }
    //     storage()
    // }, [])

    const [dataList, setDataList] = useState([])

    useEffect(() => {
        const loadData = navigation.addListener('focus', () => {
            axios.post("/process/list")
                .then(res => {
                    setDataList(res.data.data)
                }).catch(err => {
                    console.log('Error ...', err)
                })
        });

        const storage = async () => {
            let items = await AsyncStorage.getItem("user");
            setData(JSON.parse(items))
        }
        storage()
        return loadData;
    }, [navigation])
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Avatar
                        size={100}
                        source={require('../../components/img/user1.jpg')}
                        rounded
                        containerStyle={styles.avatarImg}
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.textName}>
                        Xin Chào, {data.name}
                    </Text>
                    {/* <Text style={styles.textName}>
                        @{data.username}
                    </Text> */}
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.list}>
                    <Card containerStyle={styles.listwork}>
                        <TouchableOpacity onPress={() => navigation.navigate("ListWork")}>
                            <View style={styles.badge}>
                                <Text style={styles.textbadge}>{dataList.length}</Text>
                            </View>
                            <View style={{
                                alignItems: 'center'
                            }}>
                                <Image
                                    source={require('../../components/img/To_do_list.png')}
                                    style={styles.img}
                                />
                            </View>
                            <View style={styles.text}>
                                <Text style={{ fontSize: 17, fontWeight: '600' }}>Công việc</Text>
                            </View>
                        </TouchableOpacity>
                    </Card>
                    
                </View>
                <View style={styles.list}>

                </View>
            </ScrollView>
        </View>
    )
}

export default Dashboard2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: color.orange,
        height: 140,
        flexDirection: 'row',
        borderBottomRightRadius: 80,
    },
    avatar: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center"
    },
    avatarImg: {
        borderColor: '#ff7700',
        borderWidth: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
    },
    info: {
        flex: 2,
        justifyContent: 'center',
        marginLeft: 10,
    },
    body: {
        flex: 1,
        flexDirection: 'row'
    },
    list: {
        flex: 1,
        alignItems: 'center',
    },
    listwork: {
        marginTop: 20,
        width: '85%',
        height: '30%',
        // borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,

    },
    img: {
        height: '85%',
        width: '60%',
    },
    text: {
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
    },
    textName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
    badge: {
        position: 'absolute',
        top: -29,
        right: -25,
        backgroundColor: '#ff7700',
        borderRadius: 100,
        padding: 2,
        height: 30,
        width: 30,
        paddingHorizontal: 2,
        justifyContent: 'center',
        alignItems: 'center',

    },
    textbadge: {
        fontWeight: 'bold',
        fontSize: 18
    }
})