import { StyleSheet, Text, TextInput, View } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';

const Chat = () => {
    return (
        <View style={styles.header}>
            <View style={styles.headerUpperPart}>
                <Entypo name="dots-three-vertical" size={20} color="white" />
                <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>{"Chats"}</Text>
                <FontAwesome5 name="trash" size={20} color="white" />
            </View>


            <TextInput
                placeholder='Search'
                style={{
                    width: '90%', marginLeft: 20,
                    marginRight: 20, backgroundColor: 'white',
                    marginTop: 20, borderRadius: 5,
                    height: 40
                }}
            >
            </TextInput>


        </View>
    )
}

export default Chat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#242527',
    },
    header: {
        flex: 0.2,
        backgroundColor: '#242527',
    },
    headerUpperPart: {
        paddingTop: 40,
        flexDirection: 'row', color: 'white',
        justifyContent: 'space-between', width: '100%',
        paddingLeft: 20,
        paddingRight: 20

    }

})