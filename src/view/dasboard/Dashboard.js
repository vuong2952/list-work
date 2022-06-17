/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Avatar, Badge, Card, withTheme } from "@rneui/themed";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import { windowHeight, windowWidth } from "../../utils/Dimension";
import AsyncStorage from "@react-native-async-storage/async-storage"
import axios from "axios"
import Ionicons from "react-native-vector-icons/Ionicons";
import color from "../../config/color";
import { StackActions } from "@react-navigation/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import { removeStorage } from "../../navigation/Apis";
import WorkCard from "../../components/workcard/WorkCard";



const Dashboard = ({ navigation }) => {
    const [data, setData] = useState([])

    useEffect(() => {
        const storage = async () => {
            let items = await AsyncStorage.getItem("user");
            setData(JSON.parse(items))
        }
        storage()
    }, [])

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
                </View>
            </View>

            <View style={styles.body}>
                <ScrollView>
                    <View style={styles.listwork}>
                        <View style={styles.list}>
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />

                        </View>
                        <View style={styles.list}>
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />
                            <WorkCard
                                title='Công việc'
                                onClick={() => navigation.navigate("ListWork")}
                                length={dataList?.length}
                                srcImg={require('../../components/img/To_do_list.png')}
                            />

                        </View>
                    </View>
                </ScrollView>
            </View>
        </View >
    )
}

export default Dashboard;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: color.orange,
        flex: 0.65,
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
        flex: 3.35,
        
    },
    list: {
        flex: 1,
        alignItems: 'center',
        marginBottom: 70,
    },
    listwork: {
        flexDirection: 'row',
        flex: 1,
    },

    textName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    },
})