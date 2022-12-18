import { StyleSheet, Text, View, ImageBackground, Image, TextInput, Alert, Pressable, TouchableOpacity, TouchableHighlight} from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function Login() {
  return (
    <View style={styles.container}>
        <ImageBackground
        style={styles.img}
        source={require('../assets/loginheader.png')}>
          <View style={{flex:1}}>
            <View style={styles.top}>
              <Image
              style={styles.cap}
              source={require('../assets/logincap.png')}/>
              <Text style={styles.headertxt}>Welcome back!</Text>
            </View>

            <View style={styles.bottom}>
              <TextInput style={styles.input}
              placeholder='Enter your email'/>
              <View style={{flexDirection:'row',marginTop:'5%'}}>
                <TextInput style={styles.input}
                placeholder='Enter your password'/>
                <Ionicons style={{position:'absolute',right:'2%',alignSelf:'center'}} name="eye-outline" size={25} />
                </View>
                <View style={{marginTop:'1%',width:'100%'}}>
                  <TouchableOpacity
                  onPress={() => Alert.alert("Pressed")}
                  >
                  <Text style={{fontSize:16,color:'#8391A1',alignSelf:'flex-end',right:'10%',fontWeight:'bold'}}>Forgot Password?</Text>
                  </TouchableOpacity>
                  </View> 
              {/* <TextInput style={[styles.input,{marginTop:'5%'}]}*/} 
                   
              <View style={{width:'100%',alignItems:'center'}}
              onStartShouldSetResponder= {()=> Alert.alert("Presseds")}>
              {/* <Image
               style={{marginTop:'9%',height:'32%',width:'80%',borderRadius:8}}
               source={require('../assets/loginbutton.png')}/> */}
               </View>
              </View>
          </View>
        </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top:{
    flex:.6,
    justifyContent:'center',
    alignItems:'center',
  },
  bottom:{
    flex: .4,
    alignItems:'center'
  },
  img: {
    width:'100%',
    height:'106%',
  },
  cap: {
    width:'22%',
    height:'22%',
  },
  headertxt:{
    color:'#fff',
    fontWeight:'bold',
    fontSize:32
  },
  input:{
    borderWidth:1,
    borderColor:'#E8ECF4',
    paddingHorizontal: 20,
    paddingVertical:'1.5%',
    borderRadius: 8,
    fontSize: 18,
    backgroundColor:'#E8ECF4',
    width:'80%'
  },
  eye:{
    width:'6%',
    height:'50%',
    marginRight:'5%'
  },
});
