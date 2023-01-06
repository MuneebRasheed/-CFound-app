
import { StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import Header from '../component/Header';
import Ionicons from "react-native-vector-icons/Ionicons";
import Input from '../component/Input';
import { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from '@firebase/storage';
import * as ImagePicker from 'expo-image-picker';
// import { doc, setDoc, updateDoc } from 'firebase/firestore';
import react, { useEffect } from 'react';
import { collection, doc, setDoc, getDocs, where, orderBy, query, onSnapshot, docs, snapshot, getFirestore, Timestamp, addDoc } from "firebase/firestore";
import { db } from '../firebase/config';


export default function LostItemAdd({ navigation, route }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState(null);

  const [image, setImage] = useState(null)
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

    } else {
      alert("photo is not upload");
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
    const imageRef = ref(storage, `image/${title.split(" ")[0]}`);
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
  function onNavigate() {
    navigation.pop();
  }

  async function Create() {
    console.log("create");
    //Reciever Id is come here
    // const citiesRef = collection(db, "chats");

    const docRef = await addDoc(collection(db, "Post"), {
      Category: route.params.title,
      Title: title,
      time: (new Date()).toString(),
      Description: description,
      url: imgUrl
    });

    Alert.alert("post is uploaded");


  }
  return (
    // Main VIEW
    <View style={[styles.container]}>

      {/* TOP VIEW */}
      <Header title='Post Item' navi={() => onNavigate()} />
      {/* Middle view */}

      <View style={styles.body}>
        <View style={styles.titleView}>
          <Text style={styles.titletxt}>Lost Something?</Text>
        </View>
        <View style={styles.items}>
          <Text style={{ margin: '1%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Title:</Text>
          <Input placeholder={'Enter title'} data={title} setData={setTitle} />
          <Text style={{ margin: '1%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Date:</Text>
          <Input placeholder={'Enter Date'} />
          <Text style={{ margin: '1%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Description:</Text>
          <Input placeholder={'Enter Details'} data={description} setData={setDescription} />
          <Text style={{ margin: '1%', fontSize: 15, fontWeight: 'bold', color: 'white' }}>Add image:</Text>
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
          <Text style={styles.addText}>Post</Text>
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
    fontSize: 30,
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
  addIcon: {
    alignSelf: 'center',
    backgroundColor: 'grey',
    borderRadius: 50,
    opacity: 0.6,
    padding: '2%'
  }
});