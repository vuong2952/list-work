/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const CustomHeader = ({ title, isHome, navigation }) => {
    const openMenu = () => {
        navigation.openDraw()
    }
    return (
        // <View style={styles.header}>
        //     <View>
        //         <Text>{title}</Text>
        //     </View>
        // </View>
        <View style={{ flex: 1, justifyContent: 'center', flexDirection: "row", backgroundColor: '#ccc', padding: 10, }}>
            {
                isHome ?
                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        {/* <Image
                            style={{ height: 30, width: 30, marginLeft: 5 }}
                            source={require('../components/img/menu.png')}
                            resizeMode="contain"
                        /> */}
                        {/* <MaterialIcons name="menu" size={28} onPress={openMenu} style={styles.icon} /> */}
                    </View>
                    :
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image
                            style={{ width: 20, height: 20, marginLeft: 5 }}
                            source={require('../components/img/left-arrow.png')}
                            resizeMode='contain'
                        />
                        <Text>Back</Text>
                    </TouchableOpacity>

            }
            <View style={{ flex: 1.5, justifyContent: 'center', alignItems:"center" }}>
                <Text style={{ textAlign: 'center', fontSize: 20, fontWeight:'bold' }}>{title}</Text>
            </View>
            <View style={{ flex: 0.5 }}></View>
        </View>
    )
}

export default CustomHeader;

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: "100%",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
    },
    icon: {
        position: 'absolute',
        left: 13,
    }
})
