/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'

const WorkCard = ({onClick, length, srcImg, title}) => {
    console.log(srcImg)
    console.log(onClick)
    return (
        // <View>
            <Card containerStyle={styles.listwork}>
                <TouchableOpacity onPress={onClick}>
                    <View style={styles.badge}>
                        <Text style={styles.textbadge}>{length}</Text>
                    </View>
                    <View style={{
                        alignItems: 'center'
                    }}>
                        <Image
                            source={srcImg}
                            style={styles.img}
                        />
                    </View>
                    <View style={styles.text}>
                        {/* <Text>{srcImg}</Text> */}
                        <Text style={{ fontSize: 17, fontWeight: '600' }}>{title}</Text>
                    </View>
                </TouchableOpacity>
            </Card>
        // </View>
    )
}

export default WorkCard

const styles = StyleSheet.create({
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