import { View, Text, Dimensions } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAvoidingView, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Animated, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { SendSmsOptions } from 'react-native-sms';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { auth } from '../firebase/config'
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query, } from "firebase/firestore";
// import firestore from '@react-native-firebase/firestore'
import { db } from '../firebase/config';
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry';


const Chatting = ({ route }) => {

    // console.log('Maryam and Muneeb',route.params.item)
    // const image = { };
    const [value, setValue] = useState('');
    const { width } = Dimensions.get("screen")
    const handleChange = (text) => {
        setValue(text)
    }

    async function Create() {
        console.log("create");
        //Reciever Id is come here
        const citiesRef = collection(db, "muneeb");

        await setDoc(doc(citiesRef, "maryam"), {
            message: [{
                sendBy: "muneeb",
                message: 'i am muneeb',
            }, {
                sendBy: "maryam",
                message: 'i am maryam',
            }]
        });
    }


    async function Get() {
        // const docRef = doc(db, "chat", "SF|F");
        // const docSnap = await getDoc(docRef);

        // if (docSnap.exists()) {
        //     console.log("Document data:", docSnap.data());
        // } else {
        //     // doc.data() will be undefined in this case
        //     console.log("No such document!");
        // }


        const q = query(collection(db, "chat"), where('regions', 'array-contains',
            'west_coast'));

        const querySnapshot = await getDocs(q);
        console.log("Muneeb");
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });


    }
    return (

        <View style={{ flex: 1 }}>
            {console.log("Text", value)}
            <View style={styles.chattingHeader} >
                <View style={styles.firsthalf}>
                    <View style={styles.profileandarrow}>
                        <Ionicons name="arrow-back" size={25} color="white" />
                        <Image style={styles.profileImage}
                            source={require('../assets/profile.jpeg')} />
                    </View>
                    <View style={styles.nameseen}>
                        {<Text style={styles.name} >{"Muneeb"}</Text>}
                        {<Text style={{ color: "white", }}> last seen today at 4:09 pm</Text>}
                    </View>
                </View>


                <View style={styles.secondHalf}>
                    <MaterialCommunityIcons name="dots-vertical" size={22} color="white" />
                </View>


            </View>
            <View style={styles.chatbox}>
                <ImageBackground source={require("../assets/profile.jpeg")} resizeMode="cover"
                    style={styles.image} imageStyle={{ opacity: 0.3 }}>
                    <ScrollView style={{ marginBottom: 60 }}>
                        <View style={styles.SenderMsg}>
                            <Text>Hello </Text>
                            <View style={styles.timeandcheck}>
                                <Text style={{ fontSize: 10, marginRight: 5 }}> 4:00 PM</Text>
                                {/* <Ionicons name="checkmark-done" size={17} color="#00BFFF" /> */}

                            </View>


                        </View>


                        <View style={styles.ReceiverMsg}>
                            <View style={styles.time}>
                                <Text style={{ fontSize: 10, marginRight: 5 }}> 4:00 PM</Text>
                            </View>
                            <Text>How are you?</Text>
                        </View>

                        <View style={styles.SenderMsg}>
                            <Text>I am fine  </Text>
                            <View style={styles.timeandcheck}>
                                <Text style={{ fontSize: 10, marginRight: 5 }}> 4:00 PM</Text>
                                {/* <Ionicons name="checkmark-done" size={17} color="#00BFFF" /> */}

                            </View>


                        </View>
                        <View style={styles.SenderMsg}>
                            <Text>I am fine  </Text>
                            <View style={styles.timeandcheck}>
                                <Text style={{ fontSize: 10, marginRight: 5 }}> 4:00 PM</Text>
                                {/* <Ionicons name="checkmark-done" size={17} color="#00BFFF" /> */}

                            </View>
                        </View>

                    </ScrollView>

                    <View style={{ flexDirection: "row", position: 'absolute', bottom: 0 }}>
                        <View style={{ padding: 4, width: width - 40, maxHeight: 50, }}>
                            <TextInput style={styles.textinput}
                                placeholder="Type message here"
                                multiline={true}
                                numberOfLines={10}
                                value={value}
                                onChangeText={handleChange}
                            // defaultValue={"Maryam" 
                            />
                            <View style={styles.EmojiIcon}>
                                <Ionicons name="happy-outline" size={24} color="#8D918D" /></View>
                            <View style={styles.ClipandCamera}>
                                <FontAwesome name="paperclip" size={24} color="#8D918D" />
                                <FontAwesome5 name="camera" size={24} color="#8D918D" />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.VoiceIcon} onPress={() => { Create() }}>
                            <Ionicons name="send" size={20} color="white" />

                        </TouchableOpacity>

                    </View>

                </ImageBackground>

            </View>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    chattingHeader: {
        paddingTop: 20,
        width: "100%",
        minHeight: 20,
        backgroundColor: "#242527",
        flex: 0.1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between", position: 'relative', top: 0, left: 0, right: 0
    },
    profileImage: { width: 40, height: 40, borderRadius: 50, marginLeft: 3 },
    name: {
        marginLeft: 2,
        color: "white",
        fontWeight: "500", fontSize: 16
    },
    profileandarrow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    firsthalf: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10
    },
    nameseen: {
        color: "white",
        marginLeft: 5

    },
    secondHalf: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-evenly",
        width: "20%",

    },
    chatbox: {
        flex: 1,

    }, image: {
        flex: 1,

        // justifyContent: "center"
    },
    SenderMsg: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        padding: 5,
        backgroundColor: "white",
        maxWidth: "50%",
        alignContent: "center",
        borderBottomLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        position: "relative"


    }, ReceiverMsg: {

        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
        paddingBottom: 10,
        backgroundColor: "#dcf8c6",
        // minWidth:"20%",
        maxWidth: "50%",
        padding: 10,
        // minHeight:10,
        paddingRight: 70,
        borderBottomRightRadius: 20,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        alignSelf: "flex-end",
        position: "relative"

    },
    timeandcheck: {
        position: "absolute",
        right: 0,
        bottom: 3,
        flex: 0.1,
        flexDirection: "row"

    }, time: {
        position: "absolute",
        right: 2,
        bottom: 4,
        flex: 0.1,
        flexDirection: "row"
    },
    textinput: {
        height: '100%',

        backgroundColor: "white",
        borderRadius: 20,
        position: "relative",
        paddingLeft: 43,
        paddingRight: 83,



    }, EmojiIcon: {
        position: 'absolute',
        bottom: 12, left: 17,

    },
    ClipandCamera: {
        position: "absolute",
        bottom: 12,
        right: 17,
        flexDirection: 'row',
        width: 65,
        justifyContent: "space-between",


    },
    VoiceIcon: {
        backgroundColor: "#242527",
        borderRadius: 50,
        width: 40,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 12,
        position: 'absolute',
        bottom: 4,
        right: -50,

    }




});

export default Chatting