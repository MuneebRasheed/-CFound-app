
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Events({ navigation }) {
  const DATA = [
    {
      id: '0',
      title: 'Awareness Program "Neat And Clean"',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      date: 'December 12-16, 2022',
    },
    {
      id: '1',
      title: 'Second Item',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      date: 'December 12-16, 2022',
    },
    {
      id: '2',
      title: 'Third',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      date: 'December 12-16, 2022',
    },
    {
      id: '3',
      title: 'Fourth',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      date: 'December 12-16, 2022',
    },
    {
      id: '4',
      title: 'Fifth',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      date: 'December 12-16, 2022',
    },
    {
      id: '5',
      title: 'Sixth',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      date: 'December 12-16, 2022',
    },
  ];

  function onNavigate (){
    navigation.pop()
  }
  
    return (
      // Main VIEW
        <View style={[styles.container]}>
          {/* TOP VIEW */}
          <Header title='Events' navi={() => onNavigate()}/>
          {/* Middle view */}
          <View style = {styles.body}>
            <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
            <TouchableOpacity>
            <View style={styles.innerview}>
              <Image
                source={require('../assets/events.png')}
                style={[styles.img]}
              ></Image>
              <View style={{width:'57%'}}>
                <View style={styles.flatlistheaderView}>
                  <Text style={styles.flatlistheadertext}>{item.title}</Text>
                  </View>
                <Text style={styles.datetext}>On {item.date}</Text>
              </View>
              </View>
              </TouchableOpacity>
            }
            />
            <TouchableOpacity style = {styles.addbuttonopacity}>
            <Ionicons style={{color: 'black'}} name="add" size={38} />
            </TouchableOpacity>
      </View>
      {/* Footer View */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D'
  },
  innerview:{
    backgroundColor:'#242527',
    marginBottom:'7%',
    flexDirection:'row',
    borderRadius:15,


  },
  body: {
    flex: 0.82,
    marginTop:'7%',
    marginBottom:'7%',
    alignItems:'center',
    width:'100%'
  },
  img: {
    width: 120,
    height: 103,
    margin: 8
  },
  flatlistheaderView:{
    borderBottomWidth:1,
    borderBottomColor:'#ce5c2b'
  },
  flatlistheadertext:{
    fontSize: 15,
    fontWeight: 'bold',
    color:'white',
    paddingTop:'5%',
    paddingBottom:'3%'
  },
  datetext:{
    fontSize: 10, 
    color:'white',
    position:'absolute',
    right:'0.1%',
    bottom:'5%'
  },
  addbuttonopacity:{
    position:'absolute',
    bottom:'5%',
    right:'4%',
    backgroundColor:'white',
    borderRadius:30,
    padding:'3%',
    justifyContent:'center',
    alignItems:'center',
    opacity:0.8
  }
});