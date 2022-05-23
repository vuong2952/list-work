/* eslint-disable prettier/prettier */
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BallIndicator } from 'react-native-indicators'

const Indicator = () => {
    return (
        <View style={styles.indicator}>
            <View style={styles.boxIndicator}>
                {/* <ActivityIndicator
                size={60}
                color={'#404040'}
            /> */}
                <BallIndicator size={55} color={'orange'} />
            </View>

        </View>
    )
}

export default Indicator;

const styles = StyleSheet.create({
    indicator: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.1)",
    },
    boxIndicator: {
        height: 130,
        width: 130,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.25)",
        borderRadius: 5,
    }
})