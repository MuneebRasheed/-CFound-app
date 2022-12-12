import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from '../component/Footer';

export default function Home({navigation}) {

    return (
        <View style = {styles.container}>
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
            <View style = {styles.body}>
            <TouchableOpacity style= {styles.imgView}
            onPress = {() => navigation.navigate('LostItems')}>
            <ImageBackground 
            style={styles.img}
            source={require('../assets/img1.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style= {styles.imgView}>
            <ImageBackground
            style={styles.img}
            source={require('../assets/img2.png')}
            />
            </TouchableOpacity>
            <TouchableOpacity style= {styles.imgView}
            onPress = {() => navigation.navigate('Events')}>
            <ImageBackground
            style={styles.img}
            source={require('../assets/img3.png')}
            />
            </TouchableOpacity>
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
    marginTop:'16%',
    justifyContent:'center',
    alignItems:'center',
    borderWidth:3,
    borderColor:'white',
    marginLeft:'6%',
    marginBottom:'5%',
  },
  profile: {
    width:'100%',
    height:'100%',
    borderRadius:100
  },
  headerText: {
    marginTop:'18%',
    marginLeft:'3%',
    fontWeight:'bold',
    color:'white',
    marginBottom:'7%'
  },
  headerIcon: {
    marginTop:'17%',
    marginLeft:'43%',
    marginBottom:'6%'
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