import { View, Text, Dimensions } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    useState, useEffect,
    useLayoutEffect,
    useCallback
} from 'react'
import { KeyboardAvoidingView, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity, FlatList, Animated, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
// import { SendSmsOptions } from 'react-native-sms';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, doc, setDoc, getDocs, where, orderBy, query, onSnapshot, docs, snapshot, getFirestore, Timestamp, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import Input from '../component/Input';
const Chatting = ({ route }) => {



    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([]);
    const [currentEmail, setCurrentEmail] = useState('');
    const { width } = Dimensions.get("screen")
    useEffect(() => {
        getData();
        Get();
        console.log("muneebs");
    }, [])


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userEmail');
            console.log("before", value)
            if (value != null) {
                setCurrentEmail(value);
                console.log("localstrss", value)
            }
        } catch (e) {
            // error reading value
        }
    }

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'chats');
        // console.log("collectionRef", collectionRef);
        const q = query(collectionRef, orderBy('time', 'desc'));
        const unsubscribe = onSnapshot(q, querySnapshot => {
            // console.log('querySnapshot unsusbscribe', querySnapshot?.docs);

            // setMessages(
            //     querySnapshot.docs.map(doc => ({
            //         text: doc.data().text,
            //         time: doc.data().time,
            //         groupId: doc.data().groupId,
            //         senderId: doc.data().senderId
            //     }))
            // );


            // getdata();
            return unsubscribe;
        })
        Get();
        console.log("getete")


    }, []);



    const onSend = useCallback((messages = []) => {

        console.log("muneeb");
        // const chat = collection(db, "chats");
        setMessages(pre => [
            ...pre,
            {
                text: input,
                time: Timestamp.fromDate(new Date()),
                groupId: route.params.id,
                senderId: currentEmail
            }

        ]);
        // console.log("after set message");

        // setMessages([...messages, ...messages]);
        // const { _id, createdAt, text, user } = messages[0];
        // console.log("after set mdsd");
        Create();
    }, []);

    async function Create() {
        setMessages(pre => [
            ...pre,
            {
                text: input,
                time: Timestamp.fromDate(new Date()),
                groupId: route.params.id,
                senderId: currentEmail
            }

        ]);

        if (currentEmail != "") {
            const docRef = await addDoc(collection(db, "chats"), {
                text: input,
                time: Timestamp.fromDate(new Date()),
                groupId: route.params.id,
                senderId: currentEmail
            })
        } else {
            console.log("Is something");
        }

        setInput("");


    }


    async function Get() {
        let arr = [];
        console.log("i am here to set");
        const q = query(collection(db, "chats"), where('groupId', "==", route.params.id));
        const querySnapshot = await getDocs(q);
        // console.log("Muneeb");
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arr.push(doc.data());
            // console.log(doc.id, " => ", doc.data());
        });
        // console.log("Array", arr);
        if (arr.length > 0) {
            setMessages(arr);
        }

    }




    return (

        <View style={{ flex: 1 }}>
            {/* {console.log("Text", value)} */}
            <View style={styles.chattingHeader} >
                <View style={styles.firsthalf}>
                    <View style={styles.profileandarrow}>
                        <Ionicons name="arrow-back" size={25} color="white" />
                        <Image style={styles.profileImage}
                            source={require('../assets/profile.jpeg')} />
                    </View>
                    <View style={styles.nameseen}>
                        {<Text style={styles.name} >{route?.params?.name}</Text>}
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
                        {/* {console.log("dasdas", currentEmail)} */}
                        {
                            messages.map((val, index) => {
                                if (val.senderId != currentEmail) {
                                    return (
                                        <View style={styles.SenderMsg} key={index}>
                                            <Text>{val.text} </Text>
                                            <View style={styles.timeandcheck}>
                                                <Text style={{ fontSize: 10, marginRight: 5 }}> 3:00 PM</Text>
                                                {/* <Ionicons name="checkmark-done" size={17} color="#00BFFF" /> */}

                                            </View>
                                        </View>

                                    )
                                } else {
                                    return (
                                        <View style={styles.ReceiverMsg} key={index}>
                                            <View style={styles.time}>
                                                <Text style={{ fontSize: 10, marginRight: 5 }}> 4:00 PM</Text>
                                            </View>
                                            <Text>{val.text}</Text>
                                        </View>

                                    )
                                }
                            })
                        }


                    </ScrollView>

                    <View style={{ flexDirection: "row", position: 'absolute', bottom: 0 }}>
                        <View style={{ padding: 4, width: width - 40, maxHeight: 50, }}>

                            <Input setData={setInput} data={input} />
                            <View style={styles.EmojiIcon}>
                                <Ionicons name="happy-outline" size={24} color="#8D918D" /></View>
                            <View style={styles.ClipandCamera}>
                                <FontAwesome name="paperclip" size={24} color="#8D918D" />
                                <FontAwesome5 name="camera" size={24} color="#8D918D" />
                            </View>
                        </View>
                        <TouchableOpacity style={styles.VoiceIcon} onPress={Create}>
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