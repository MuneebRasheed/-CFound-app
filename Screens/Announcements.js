
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Announcements({ navigation }) {
  const DATA = [
    {
      id: '0',
      title: 'Instructions related to Exam Coupons',
      date: 'December 12-16, 2022',
    },
    {
      id: '1',
      title: 'Bus timing and routes in Exams',
      date: 'December 12-16, 2022',
    },
    {
      id: '2',
      title: 'Third',
      date: 'December 12-16, 2022',
    },
    {
      id: '3',
      title: 'Fourth',
      date: 'December 12-16, 2022',
    },
    {
      id: '4',
      title: 'Fifth',
      date: 'December 12-16, 2022',
    },
    {
      id: '5',
      title: 'Sixth',
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
          <Header title='Announcements' navi={() => onNavigate()}/>
          {/* Middle view */}
          <View style = {styles.body}>
            <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
            <TouchableOpacity>
            <View style={styles.innerview}>
              <Image
                source={require('../assets/announcement.png')}
                style={[styles.img]}
              ></Image>
              <View style={{width:'65%'}}>
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
    flex: 0.89,
    marginTop:'7%',
    marginBottom:'2%',
    alignItems:'center',
    width:'100%'
  },
  img: {
    width: 90,
    height: 120,
    margin: 5
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