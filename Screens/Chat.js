import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';

import React, { useState } from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../component/Input';
import { Ionicons } from '@expo/vector-icons';
import ChatProfile from '../component/ChatProfile';
import Footer from '../component/Footer';

const Chat = () => {
    const [password, setPassword] = useState("");
    return (
        <View style={{ flex: 1, backgroundColor: 'white', }} >
            <KeyboardAvoidingView style={styles.header} behavior="padding" keyboardVerticalOffset={400} enabled>
                <View style={styles.headerUpperPart}>
                    <Entypo name="dots-three-vertical" size={18} color="white" />
                    <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>{"Chats"}</Text>
                    <FontAwesome5 name="trash" size={18} color="white" />
                </View>
                <View style={styles.inputover}>
                    <Input placeholder='Search' secureTextEntry={false} setData={setPassword} data={password} />
                    <Ionicons style={styles.eyeicon} name="search" size={20} color="grey" />
                </View>
            </KeyboardAvoidingView>

            <ScrollView style={{
                flex: 1
            }}>
                <ChatProfile />
                <ChatProfile />
                <ChatProfile />
            </ScrollView>


        </View >


    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242527',
    },
    header: {
        flex: 0.25,
        backgroundColor: '#242527',
    },
    headerUpperPart: {
        paddingTop: 40,
        flexDirection: 'row',
        justifyContent: 'space-between', width: '100%',
        paddingLeft: 35,
        paddingRight: 40,
        marginBottom: 10

    }, inputover: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, eyeicon: {
        position: 'absolute', left: '10%', alignSelf: 'center', top: 18, paddingLeft: 10
    },

})