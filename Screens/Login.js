import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Alert, Pressable, TouchableOpacity, TouchableHighlight } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react'
import Input from '../component/Input'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { auth } from '../firebase/config';
import { collection, doc, setDoc, addDoc, updateDoc, deleteDoc, getDoc, getDocs, where, query } from "firebase/firestore";
// import firestore from '@react-native-firebase/firestore'
// import { db } from '../firebase/config';
// import { getAuth, updateProfile } from "firebase/auth";
//end 

export default function Login({ navigation }) {
  const [email, setEmail] = useState("laiba12@gmail.com");
  const [password, setPassword] = useState("123456");
  const [showPassword, setShowPassword] = useState(true);
  ;

  const loginUser = () => {
    console.log("email", email);
    console.log(password);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(data => {

        console.log('firebase return is = ', data)
        navigation.navigate("Home");
      }).catch(error => {
        console.log('Catch Error', error)

      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.upperBottom}>
        <View style={styles.upperTOP}>
          <Image
            style={styles.cap}
            source={require('../assets/logincap.png')} />
          <Text style={styles.headertxt}>Welcome back!</Text>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <View style={styles.bottom}>
          <View style={styles.bottoTop}>
            <Input placeholder='Enter your email' secureTextEntry={false} setData={setEmail} data={email} />
            <View style={{ flexDirection: 'row', marginTop: '5%' }}>
              <Input placeholder='Enter your password' secureTextEntry={showPassword} setData={setPassword} data={password} />
              <Ionicons style={styles.eyeicon} name="eye-outline" size={20}
                onPress={() => { setShowPassword(pre => !pre) }} />
            </View>
            <TouchableOpacity
              onPress={() => Alert.alert("Pressed")}
              style={styles.passwordTouchably}
            >
              <Text style={styles.grey}>Forgot Password?</Text>
            </TouchableOpacity>

            <View style={styles.loginMain}>
              <TouchableOpacity
                onPress={loginUser}
                style={styles.loginBtn}
              >
                <Text style={styles.loginText}>Login</Text>
              </TouchableOpacity>

              <Text style={styles.grey}>Don't have an account?{"  "}
                <TouchableOpacity onPress={() => { navigation.navigate('Signup') }} >
                  <Text style={styles.registerNow}>Register Now</Text>
                </TouchableOpacity>
              </Text>

            </View>

          </View>

        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  upperBottom: {
    flex: 1,
    backgroundColor: 'white'
  },
  upperTOP: {
    flex: 1,
    backgroundColor: '#242527',
    borderBottomRightRadius: 40,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: '10%'
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: .6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottom: {
    flex: 1,
    backgroundColor: '#242527'

  },
  bottoTop: {
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    paddingTop: '10%',
    alignItems: 'center'
  },

  img: {
    width: '100%',
    height: '106%',
  },
  cap: {
    width: '22%',
    height: '22%',
  },
  headertxt: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32
  },

  eyeicon: {
    position: 'absolute', right: '2%', alignSelf: 'center', top: 18
  }, passwordTouchably: {
    justifyContent: 'flex-end', flexDirection: "row", width: "80%",
    marginTop: 7
  }, grey: { fontSize: 14, color: '#8391A1', fontWeight: 'bold' },
  loginMain: { flex: .8, justifyContent: 'space-around', alignItems: 'center', width: '80%' },
  loginBtn: {
    width: "100%",
    justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#DA692F', height: 40, borderRadius: 8
  },
  loginText: { fontSize: 14, color: 'white', fontWeight: 'bold' },
  registerNow: { fontSize: 14, color: '#DA692F', fontWeight: 'bold', marginBottom: -4 }
});
