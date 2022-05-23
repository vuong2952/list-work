/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native'
import React from 'react';
import color from '../../config/color';
import { Avatar, Card } from '@rneui/themed';

const Home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.avatar}>
                    <Avatar
                        size={100}
                        source={require('../../components/img/user1.jpg')}
                        rounded
                    // containerStyle={styles.img}
                    />
                </View>
                <View style={styles.info}>
                    <Text>
                        Hello
                    </Text>
                </View>
            </View>
            <ScrollView contentContainerStyle={styles.body}>
                <View style={styles.list}>
                    <Card containerStyle={styles.listwork}>
                        <View style={{
                            alignItems: 'center'
                        }}>
                            <Image
                                source={require('../../components/img/To_do_list.png')}
                                style={styles.img}
                            />
                        </View>
                        <View style={styles.text}>
                            <Text style={{ fontSize: 16 }}>Công việc</Text>
                        </View>
                        <View>

                        </View>
                    </Card>
                </View>
                <View style={styles.list}>

                </View>
            </ScrollView>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        backgroundColor: color.orange,
        height: 140,
        flexDirection: 'row',
    },
    avatar: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: "center"
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
        width: '90%',
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
        width: '50%',
    },
    text: {
        borderRadius: 5,
        backgroundColor: '#ccc',
        alignItems: 'center',
    }
})