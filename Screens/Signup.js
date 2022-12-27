import { StyleSheet, Text, View, Alert, TouchableOpacity, Image } from 'react-native';
import firebase from 'firebase/compat/app';
import Ionicons from "react-native-vector-icons/Ionicons";
import { useState } from 'react'
import Input from '../component/Input'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// import { auth } from '../firebase/config'

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [username, setUseranme] = useState("");
    const createUser = () => {
        console.log("email", email);
        firebase.auth().createUserWithEmailAndPassword(email, password
        )
            .then(({ user }) => {
                // QUERY Firestore Ko Data Send Kar dain gai

                user.updateProfile({ displayName: username })
                console.log('firebase return is = ', user);
            }).catch(error => {
                console.log('Catch Error', error)
                // Alert.alert('error', error.message);
            })



    };
    return (
        <View style={styles.container}>
            <View style={styles.upperBottom}>
                <View style={styles.upperTOP}>
                    <Text style={styles.headertxt}>Create Account</Text>
                </View>
            </View>
            <View style={{ flex: 1 }}>
                <View style={styles.bottom}>
                    <View style={styles.bottoTop}>
                        <View style={{ flex: 1.5, alignItems: 'center', justifyContent: 'center', paddingTop: 15 }}>
                            <View style={styles.inputover}>
                                <Input placeholder='Username' secureTextEntry={false} setData={setUseranme} data={username} />
                            </View>
                            <View style={styles.inputover}>
                                <Input placeholder='Email' secureTextEntry={false} setData={setEmail} data={email} />
                            </View>

                            <View style={styles.inputover}>
                                <Input placeholder='Password' secureTextEntry={showPassword} setData={setPassword} data={password} />
                                <Ionicons style={styles.eyeicon} name="eye-outline" size={20}
                                    onPress={() => { setShowPassword(pre => !pre) }} />
                            </View>
                            <View style={styles.inputover}>
                                <Input placeholder='Confirm Password' secureTextEntry={showConfirmPassword} setData={setConfirmPassword} data={confirmPassword} />
                                <Ionicons style={styles.eyeicon} name="eye-outline" size={20}
                                    onPress={() => { setShowConfirmPassword(pre => !pre) }} />
                            </View>
                            <View style={styles.inputover}>
                                <TouchableOpacity
                                    onPress={createUser}
                                    style={styles.loginBtn}
                                >
                                    <Text style={styles.loginText}>Register</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.loginMain}>

                            <Text style={styles.grey}>Already have an account?{"  "}
                                <TouchableOpacity onPress={() => { navigation.navigate('Login') }} >
                                    <Text style={styles.registerNow}>Login Now</Text>
                                </TouchableOpacity>
                            </Text>

                        </View>

                    </View>

                </View>
            </View>

        </View>
    )
}

export default Signup

const styles = StyleSheet.create({
    upperBottom: {
        flex: .2,
        backgroundColor: 'white',
    },
    upperTOP: {
        flex: 1,
        backgroundColor: '#242527',
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: '5%',
        minHeight: 90
    },
    container: {
        flex: 2, backgroundColor: 'red'
    },
    top: {
        flex: .6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottom: {
        flex: 2,
        backgroundColor: '#242527'

    },
    bottoTop: {
        flex: 2,
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
        fontSize: 30
    },

    eyeicon: {
        position: 'absolute', right: '2%', alignSelf: 'center', top: 18
    }, passwordTouchably: {
        justifyContent: 'flex-end', flexDirection: "row", width: "80%",
        marginTop: 7
    }, grey: { fontSize: 14, color: '#8391A1', fontWeight: 'bold' },
    loginMain: { flex: .8, justifyContent: 'space-around', alignItems: 'center', width: '80%' },
    loginBtn: {
        width: "80%",
        justifyContent: 'center', alignItems: 'center',
        backgroundColor: '#DA692F', height: 40, borderRadius: 8, marginTop: 25
    },
    loginText: { fontSize: 14, color: 'white', fontWeight: 'bold' },
    registerNow: { fontSize: 14, color: '#DA692F', fontWeight: 'bold', marginBottom: -4 }
    , inputover: { flexDirection: 'row', }
});