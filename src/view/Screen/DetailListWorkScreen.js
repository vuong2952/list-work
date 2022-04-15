/* eslint-disable prettier/prettier */
import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { windowHeight } from '../../utils/Dimension';
import { Badge } from '@rneui/base';

const DetailListWorkScreen = ({ route, navigation }) => {
    console.log(route.params.title);
    const [title, setTitle] = route.params.title;
    const [status, setStatus] = route.params.status;
    console.log(title)
    const list3 = [
        {
            title: 'non',
            status: '1',
        },
        {
            title: 'nhung',
            status: '4',
        },
    ];
    return (
        <View style={styles.container}>
            
            <View>
                {
                    list3.map((i, e) => (
                        < View >{
                            i.status == 1 ? <Text style={styles.text}>{i.title}</Text> : null 
                        }
                        </View>
                    ))
                }
                {/* <Text style={styles.text}>{route.params.title}</Text>
                <Text>{route.params.status}</Text> */}
                <Badge value={<Text style={{paddingVertical: 10, textAlign: 'center'}}>My Custom Badge</Text>} />
            </View>

        </View >
    )
}

export default DetailListWorkScreen

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        marginTop: 18,
        width: '100%',
        height: windowHeight / 7,
        backgroundColor: '#ff7700',
        padding: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
})