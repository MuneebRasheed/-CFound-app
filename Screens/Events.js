
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Events({ navigation }) {
  const DATA = [
    {
      id: '0',
      title: 'Awareness Program "Neat And Clean"',
      time: '12 pm',
      date: 'December 12-16, 2022',
      //link: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
      description: 'Event is to be held in comsats lahorekasjdkasjdlkasjdlkasjlkdasjlkdjla askdjas aldkjaslkd alk laksdjlaks laksjdlka sjlkdj lkasjdlka jldk sajlkdj',
      venue:'Comsats lhr',

    },
    {
      id: '1',
      title: 'Second Item',
      time: '12 pm',
      date: 'December 12-16, 2022',
      //link: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
      description: 'Event is to be held in comsats lahorekasjdkasjdlkasjdlkasjlkdasjlkdjla askdjas aldkjaslkd alk laksdjlaks laksjdlka sjlkdj lkasjdlka jldk sajlkdj',
      venue:'Comsats lhr',
    },
    {
      id: '2',
      title: 'Third',
      time: '12 pm',
      date: 'December 12-16, 2022',
      //link: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
      description: 'Event is to be held in comsats lahorekasjdkasjdlkasjdlkasjlkdasjlkdjla askdjas aldkjaslkd alk laksdjlaks laksjdlka sjlkdj lkasjdlka jldk sajlkdj',
      venue:'Comsats lhr',
    },
    {
      id: '3',
      title: 'Fourth',
      time: '12 pm',
      date: 'December 12-16, 2022',
      //link: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
      description: 'Event is to be held in comsats lahorekasjdkasjdlkasjdlkasjlkdasjlkdjla askdjas aldkjaslkd alk laksdjlaks laksjdlka sjlkdj lkasjdlka jldk sajlkdj',
      venue:'Comsats lhr',
    },
    {
      id: '4',
      title: 'Fifth',
      time: '12 pm',
      date: 'December 12-16, 2022',
      //link: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
      description: 'Event is to be held in comsats lahorekasjdkasjdlkasjdlkasjlkdasjlkdjla askdjas aldkjaslkd alk laksdjlaks laksjdlka sjlkdj lkasjdlka jldk sajlkdj',
      venue:'Comsats lhr',
    },
    {
      id: '5',
      title: 'Sixth',
      time: '12 pm',
      date: 'December 12-16, 2022',
      //link: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
      description: 'Event is to be held in comsats lahorekasjdkasjdlkasjdlkasjlkdasjlkdjla askdjas aldkjaslkd alk laksdjlaks laksjdlka sjlkdj lkasjdlka jldk sajlkdj',
      venue:'Comsats lhr',
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
            <TouchableOpacity
            onPress= {() => navigation.navigate('EventDetails',{
              title: item.title,
              desc: item.description,
              venue: item.venue,
              date: item.date,
              time: item.time
              })}>
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