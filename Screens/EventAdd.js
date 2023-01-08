
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from '../component/Header';
import Input from '../component/Input';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import { useState } from 'react';
import { collection, doc, setDoc, getDocs, where, orderBy, query, onSnapshot, docs, snapshot, getFirestore, Timestamp, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';
import react, { useEffect } from 'react';


export default function EventAdd({ navigation }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState(null);
  const [venue, setVenue] = useState('');

  const [image, setImage] = useState(null)
  const [time, settime] = useState('1')
  const [tme, settme] = useState('AM')
  useEffect(() => {
    uploadImage();
  }, [image])
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      console.log("imageurl", (result.assets[0].uri));
    }

  };


  const uploadImage = async () => {
    const storage = getStorage();
    console.log("beforeBolb");
    const blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function (e) {
        console.log(e);
        reject(new TypeError("Network request failed"));
      };
      xhr.responseType = "blob";
      xhr.open("GET", image, true);
      xhr.send(null);
    });
    console.log("afterBolb");
    const imageRef = ref(storage, `image/muneeb`);
    const metadata = {
      contentType: "image/jpeg",
    };

    await uploadBytes(imageRef, blob, metadata)

      .then(async (snapshot) => {
        console.log("within upload bytes");
        const downloadURL = await getDownloadURL(imageRef);
        console.log("url dowload", downloadURL);
        setImgUrl(downloadURL);
        alert("photo is upload");
        // setNewImage(downloadURL)
        // if(value1=='Student'){
        //     await updateDoc(doc(db, "Student", Email), {
        //         Image: downloadURL,
        //     });
        // }
        // if(value1=='Tutor'){
        //     await updateDoc(doc(db, "Tutor", Email), {
        //         Image: downloadURL,
        //     });
        // }
        blob.close();
      }).catch((e) => {
        console.log('warning a gai ha boss', e)
      })
  };
  async function Create() {
    console.log("create");
    //Reciever Id is come here
    // const citiesRef = collection(db, "chats");

    const docRef = await addDoc(collection(db, "Events"), {
      Venue: venue,
      Title: title,
      time: (new Date()).toString(),
      Description: description,
      url: imgUrl
    });

    Alert.alert("post is uploaded");


  }
  function onNavigate() {
    navigation.pop()
  }
  return (
    // Main VIEW
    <View style={[styles.container]}>
      {/* TOP VIEW */}
      <Header title='Add Event' navi={() => onNavigate()} />
      {/* Middle view */}

      <View style={styles.body}>
        <View style={styles.titleView}>
          <Text style={styles.titletxt}>List a new Event</Text>
        </View>
        <View style={styles.items}>
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Title:</Text>
          <Input placeholder={'Enter title'} data={title} setData={setTitle} />
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Date:</Text>
          <Input placeholder={'Enter Date'} />
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Time:</Text>

          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Venue:</Text>
          <Input placeholder={'Enter Venue'} data={venue} setData={setVenue} />
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Details:</Text>
          <Input placeholder={'Enter Details'} data={description} setData={setDescription} />
          <Text style={{ margin: '2%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add image:</Text>
          <View style={{ width: '80%', backgroundColor: 'white', padding: '3%', borderRadius: 8 }} >
            {
              imgUrl != null ? <Image style={{ width: '30%', height: '30%', alignSelf: 'center', paddingTop: 100 }}
                source={{
                  uri: imgUrl,
                }} /> : <TouchableOpacity style={styles.addIcon} onPress={pickImage}>
                <Ionicons style={{ color: 'black' }} name="add" size={38} />
              </TouchableOpacity>
            }
          </View>
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
    flex: .8,
    width: '100%',
    marginBottom: '5%'
  },
  titleView: {
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titletxt: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
  },
  items: {
    flex: .89,
    left: '9%'
  },
  timepicker: {
    width: '40%',
    backgroundColor: 'white',
    margin: '.05%',
    borderRadius: 50
  },
  bottom: {
    flex: .09,
    alignItems: 'center',
  },
  addBtn: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA692F',
    height: '70%',
    borderRadius: 20
  },
  addText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  addIcon: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    borderRadius: 50,
    opacity: 0.6,
    padding: '2%'
  }
});