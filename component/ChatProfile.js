import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import React from 'react'

const ChatProfile = ({ name, id, navigation }) => {
    return (
        <View style={{ alignItems: 'center' }} >
            <View style={{ flexDirection: 'row', width: '90%', backgroundColor: 'white', paddingRight: 19 }}>
                <Image style={{ width: 50, height: 50, borderRadius: 100, marginTop: '4%', marginRight: '4%', marginLeft: '4%', color: '#2192FF' }}
                    source={require('../assets/profile.jpeg')} />
                {/* onPress={()=>navigation.navigate('Chat', {item} )}  */}
                <View style={{ flexDirection: 'row', width: '80%', justifyContent: 'space-between', height: 70, marginTop: '3%' }}
                >
                    <View>
                        <Text style={{ fontSize: 18, color: 'black', fontWeight: 'bold', marginBottom: '2%' }}>{name}</Text>
                        <Text style={{ fontSize: 16, color: 'black' }}>{"Tang Na karo"}</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end', right: '15%' }}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'black' }}>{"7:28 PM"}</Text>
                        <View style={{ alignItems: 'center', borderRadius: 50, width: 22, height: 22, backgroundColor: 'black', marginTop: '7%' }}>
                            <Text style={{ fontSize: 15, color: 'white' }}>{"3"}</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ChatProfile

const styles = StyleSheet.create({})