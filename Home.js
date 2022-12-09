import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from './component/Footer';

export default function Home({navigation}) {

    return (
        <View style = {styles.container}>
            <View style = {styles.header}>
            <View style={styles.profileView}>
            <Image 
            style={styles.profile}
            source={require('./assets/profile.jpeg')}
            />
            </View>
            <Text style={styles.headerText}>Hi, Laiba Sattar!</Text>
            <TouchableOpacity style= {styles.headerIcon}>
            <Ionicons style={{color: 'white'}} name="notifications-outline" size={25} />
            </TouchableOpacity>
            </View>
            <View style = {styles.body}>
            <View style= {styles.imgView}>
            <ImageBackground 
            style={styles.img}
            resizeMode="cover"
            source={require('./assets/img1.png')}
            />
            </View>
            <View style= {styles.imgView}>
            <ImageBackground
            style={styles.img}
            source={require('./assets/img2.png')}
            />
            </View>
            <View style= {styles.imgView}>
            <ImageBackground
            style={styles.img}
            source={require('./assets/img3.png')}
            />
            </View>
            </View>
            <Footer/>
        </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242527',
  },
  header: {
    flex: 0.15,
    backgroundColor: '#ce5c2b',
    flexDirection:'row'
  },
  profileView: {
    borderRadius:50,
    backgroundColor:'white',
    height:'30%',
    width:'10%',
    marginTop:'18%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:5,
    borderColor:'white',
    marginLeft:'5%'
  },
  profile: {
    width:'100%',
    height:'100%'
  },
  headerText: {
    marginTop:'20%',
    marginLeft:'3%',
    fontWeight:'bold',
    color:'white'
  },
  headerIcon: {
    marginTop:'19%',
    marginLeft:'40%'
  },
  body: {
    flex: 0.77,
    backgroundColor: '#242527',
    alignItems:'center',
    justifyContent:'center'
  },
  img: {
    width:'100%',
    height:'100%'
  },
  imgView: {
    width:'80%',
    height:'20%'
  }
});