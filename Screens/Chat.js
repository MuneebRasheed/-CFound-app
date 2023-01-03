import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity, KeyboardAvoidingView, ScrollView } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    useState, useEffect,
    useLayoutEffect,
    useCallback
} from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import Input from '../component/Input';
import { Ionicons } from '@expo/vector-icons';
import ChatProfile from '../component/ChatProfile';
import Footer from '../component/Footer';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { collection, doc, setDoc, getDocs, where, orderBy, query, onSnapshot, docs, snapshot, getFirestore } from "firebase/firestore";
import { db } from '../firebase/config';

const Chat = ({ navigation }) => {
    const [password, setPassword] = useState("");
    const [chatGroups, setChatGroups] = useState([]);
    const [currentEmail, setCurrentEmail] = useState('');
    useEffect(() => {
        getData();
    }, [currentEmail])


    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('userEmail')
            if (value !== null) {
                setCurrentEmail(value);
                console.log("localstrss", value)
                Get();
            }
        } catch (e) {
            // error reading value
        }
    }

    useLayoutEffect(() => {
        const collectionRef = collection(db, 'groups');
        // console.log("collectionRef", collectionRef);
        // const q = query(collectionRef, orderBy('created_At', 'desc'));
        const unsubscribe = onSnapshot(collectionRef, querySnapshot => {
            console.log('querySnapshot unsusbscribe', querySnapshot?.docs[1]?.data());

            // setChatGroups(
            //     querySnapshot.docs.map(doc => ({
            //         id: doc.data().id,
            //         members: doc.data().members,
            //         name: doc.data().name,
            //         uri: doc.data().uri
            //     }))
            // );
            Get();
            // getdata();
            return unsubscribe;
        })
    }, []);



    async function Get() {
        let arr = [];
        console.log("currentEmail", typeof (currentEmail));
        const q = query(collection(db, "groups"), where('members', "array-contains", currentEmail));
        const querySnapshot = await getDocs(q);
        console.log("Muneeb");
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            arr.push(doc.data());
            console.log(doc.id, " => ", doc.data());
            console.log("muneebebdadsdas")
        });
        console.log("Array", arr);
        setChatGroups(arr);
    }
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
                {
                    chatGroups.map(val => {
                        return (<TouchableOpacity key={val.id} onPress={() => {
                            navigation.navigate("Chatting", { id: val.id, name: val.name });
                            console.log("navigate");
                        }}>
                            <ChatProfile name={val.name} id={val.id} />
                        </TouchableOpacity>

                        )
                    })
                }
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