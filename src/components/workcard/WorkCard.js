/* eslint-disable prettier/prettier */
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Card, Image } from '@rneui/themed'
import color from '../../config/color'

const WorkCard = ({ onClick, length, srcImg, title }) => {
    return (
        <Card containerStyle={styles.card}>
            <TouchableOpacity onPress={onClick}>
                <View style={styles.badge}>
                    <Text style={styles.textbadge}>{length}</Text>
                </View>
                <View style={{ alignItems: 'center' }}>

                    <Image
                        source={srcImg}
                        style={styles.img}
                    /></View>
                <View style={styles.text}>
                    <Text style={styles.textTitle}>{title}</Text>
                </View>

            </TouchableOpacity>


        </Card >
        // </View>
    )
}

export default WorkCard

const styles = StyleSheet.create({
    card: {
        marginTop: 20,
        width: '90%',
        borderRadius: 10,
        justifyContent: 'center',
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
        borderRadius: 10,
        height: 100,
        width: 100,
    },
    text: {
        marginTop: 10,
        borderRadius: 5,
        backgroundColor: 'rgba(0,0,0,0.05)',
        alignItems: 'center',
        width: '100%',
    },
    textTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    badge: {
        position: 'absolute',
        top: -20,
        right: -20,
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
        fontSize: 20,
        color: 'white'
    }
})