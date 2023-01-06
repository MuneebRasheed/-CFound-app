import { StyleSheet, Text, View, Image, TextInput,TouchableWithoutFeedback, TouchableOpacity, Button, ImageBackground } from 'react-native';
import Header from '../component/Header';
import FontAwesome from "react-native-vector-icons/FontAwesome5";

export default function Profile({navigation}) {
    function onNavigate() {
        navigation.pop()
      }
    return (
        <View style = {styles.container}>
            <Header title='Profile' navi={() => onNavigate()}/> 
            <View style={{flex: 0.89}} >
    <View style={{flex: 0.17, backgroundColor: '#242527',height:'100%'}}></View>
      <View style={{flex: 0.14,alignItems:'center',height:'100%'}}>
          <Image
              source={require('../assets/profile.jpeg')}
              style={{ 
              width: 120,
              height: 120,
              borderRadius: 90,
              position: 'absolute',
              bottom: 0,
              borderWidth:2,
              borderColor:'white',
              backgroundColor:'white'
              }}>
          </Image>
        </View>  
            <Text style={{fontSize:20,color:'black',textAlign:'center',fontWeight:'bold',marginBottom:'1%',marginTop:'2%'}}>Laiba Sattar</Text>
            <Text style={{fontSize:16,color:'black',textAlign:'center',marginBottom:'2%'}}>FA20-BCS-002@cuilahore.edu.pk</Text>   
            <TouchableOpacity style={{backgroundColor:'#09031C',padding:5,borderRadius:8,width:'30%',height:'6%',alignSelf:'center',justifyContent:'center',margin:'1%'}}>
                <Text style={{fontSize:16,color:'white',textAlign:'center'}}>Edit Profile</Text>
            </TouchableOpacity>

            <View style={{flexDirection:'row',marginLeft:'8%',marginTop:'25%',marginBottom:'5%'}}> 
            <Text style={{fontSize:24,color:'black',fontWeight:'bold'}}>About</Text>
            <TouchableOpacity style={{position:'absolute',right:'10%',alignSelf:'center'}}>
              <FontAwesome style={{color: '#ce5c2b' }} name="chevron-right" size={18} />
            </TouchableOpacity>
            </View> 

            <View style={{flexDirection:'row',marginLeft:'8%'}}> 
            <Text style={{fontSize:22,color:'black',fontWeight:'bold'}}>Share with your friends</Text>
            <TouchableOpacity style={{position:'absolute',right:'10%',alignSelf:'center'}}>
              <FontAwesome style={{color: '#ce5c2b' }} name="share-alt" size={18} />
            </TouchableOpacity>
            </View> 

            <TouchableOpacity style={{height:'7%', backgroundColor: '#ce5c2b',width:'80%',alignSelf:'center',borderRadius:15,justifyContent:'center',position:'absolute',bottom:'20%'}}>
            <Text style={{fontSize:20,color:'white',textAlign:'center',fontWeight:'bold'}}>Logout</Text>
            </TouchableOpacity>
        </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    }
})