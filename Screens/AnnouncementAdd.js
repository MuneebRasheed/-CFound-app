
import { StyleSheet, Text, View, TouchableOpacity, Alert } from 'react-native';
import Header from '../component/Header';
import Input from '../component/Input';
import { useState } from 'react';

import { collection, doc, setDoc, getDocs, where, orderBy, query, onSnapshot, docs, snapshot, getFirestore, Timestamp, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';

export default function AnnouncementAdd({ navigation }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  function onNavigate() {
    navigation.pop()
  }

  async function Create() {
    console.log("create");
    //Reciever Id is come here
    // const citiesRef = collection(db, "chats");

    const docRef = await addDoc(collection(db, "Announcment"), {
      Title: title,
      time: (new Date()).toString(),
      Description: description,

    });

    Alert.alert("announcment is created");


  }
  return (
    // Main VIEW
    <View style={[styles.container]}>
      {/* TOP VIEW */}
      <Header title='Post Announcement' navi={() => onNavigate()} />
      {/* Middle view */}

      <View style={styles.body}>
        <View style={styles.titleView}>
          <Text style={styles.titletxt}>List a new Announcement</Text>
        </View>
        <View style={styles.items}>
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Title:</Text>
          <Input placeholder={'Enter title'} data={title} setData={setTitle} />
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Date:</Text>
          <Input placeholder={'Enter Date'} />
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Details:</Text>
          <Input placeholder={'Enter Details'} data={description} setData={setDescription} />
        </View>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => { Create(); }}
          style={styles.addBtn}>
          <Text style={styles.addText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D'
  },
  body: {
    flex: .7,
    width: '100%',
    marginBottom: '5%'
  },
  titleView: {
    flex: .15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletxt: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white'
  },
  items: {
    flex: .85,
    left: '8%'
  },
  bottom: {
    flex: .2,
    alignItems: 'center',
  },
  addBtn: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA692F',
    height: '35%',
    borderRadius: 20
  },
  addText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
});