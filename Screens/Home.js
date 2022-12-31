import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from '../component/Footer.js';

export default function Home({ navigation }) {
    return (
        <View style = {styles.container}>
          {/* HEADER */}
            <View style = {styles.header}>
            <View style={styles.profileView}>
            <Image 
            style={styles.profile}
            source={require('../assets/profile.jpeg')}
            />
            </View>
            <Text style={styles.headerText}>Hi, Laiba Sattar!</Text>
            <TouchableOpacity style= {styles.headerIcon}>
            <Ionicons style={{color: 'white'}} name="notifications-outline" size={25} />
            </TouchableOpacity>
            </View>
          {/* BODY  */}
            <View style = {styles.body}>
            <TouchableOpacity style= {styles.imgView}
            onPress = {() => navigation.navigate('LostItems')}>
            <ImageBackground 
            style={styles.img}
            source={require('../assets/img1.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgView}>
          <ImageBackground
            style={styles.img}
            source={require('../assets/img2.png')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.imgView}
          onPress={() => navigation.navigate('Events')}>
          <ImageBackground
            style={styles.img}
            source={require('../assets/img3.png')}
            />
            </TouchableOpacity>
            </View>
        </View>
);

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D',
  },
  header: {
    flex: 0.13,
    backgroundColor: '#ce5c2b',

    flexDirection:'row',
    paddingBottom:'6%',
    alignItems:'flex-end',
  },
  profileView: {
    borderRadius:50,
    backgroundColor:'white',
    height:'35%',
    width:'10%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'white',
    marginLeft:'6%',

  },
  profile: {
    width: '100%',
    height: '100%',
    borderRadius: 100
  },
  headerText: {

    marginLeft:'3%',
    fontWeight:'bold',
    color:'white',
    paddingBottom:'2%',
    fontSize:16
  },
  headerIcon: {
    marginLeft:'40%',
    paddingBottom:'1%'
  },
  body: {
    flex: 0.81,
    backgroundColor: '#3D3D3D',
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  imgView: {
    width: '80%',
    height: '20%'
  }
});