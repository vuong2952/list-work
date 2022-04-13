/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import { Image } from "@rneui/themed";
import React from "react";
import { ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons"

const Profile = props => {
    return (
        <View>
            <ScrollView contentContainerStyle={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white',
            }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: 10,
                }}>
                    {/* <TouchableOpacity>
                        <Ionic name="close-outline" style={{ fontSize: 35 }} />
                    </TouchableOpacity> */}
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>User Profile</Text>
                    <TouchableOpacity>
                        <Ionic name="checkmark" style={{ fontSize: 35, color: '#3493D9' }} />
                    </TouchableOpacity>
                </View>

                <View style={{ padding: 20, alignItems: 'center' }}>
                    <TouchableOpacity>
                        <Image
                            source={require('../../components/img/user.png')}
                            style={{ width: 120, height: 120, borderRadius: 100, marginBottom: 10 }}
                            
                        />
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: '#3493D9',
                        }}>
                        {/* Change profile photo */}
                    </Text>
                </View>

                <View style={{ padding: 10 }}>
                    <View>
                        <Text
                            style={{
                                opacity: 0.5,
                            }}>
                            Name
                        </Text>
                        <TextInput
                            placeholder="name"
                            // defaultValue={props.name}
                            style={{
                                fontSize: 18,
                                borderBottomWidth: 1,
                                borderColor: '#CDCDCD',
                            }}
                        />
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text
                            style={{
                                opacity: 0.5,
                            }}>
                            Username
                        </Text>
                        <TextInput
                            placeholder="Username"
                            defaultValue="User 1"
                            style={{
                                fontSize: 18,
                                borderBottomWidth: 1,
                                borderColor: '#CDCDCD',
                            }}
                        />
                    </View>
                    <View style={{ paddingVertical: 10 }}>
                        <Text
                            style={{
                                opacity: 0.5,
                            }}>
                            Address
                        </Text>
                        <TextInput
                            placeholder="Address"
                            defaultValue="Le Hong Phong"
                            style={{
                                fontSize: 18,
                                borderBottomWidth: 1,
                                borderColor: '#CDCDCD',
                            }}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default Profile;