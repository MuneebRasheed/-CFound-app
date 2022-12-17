
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';
import Ionicons from "react-native-vector-icons/Ionicons";


export default function Events({ navigation }) {
  const DATA = [
    {
      id: '0',
      title: 'First Item',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      description: 'Event one',
    },
    {
      id: '1',
      title: 'Second Item',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      description: 'Event two',
    },
    {
      id: '2',
      title: 'Third',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      description: 'Event three',
    },
    {
      id: '3',
      title: 'Fourth',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      description: 'Event four',
    },
    {
      id: '4',
      title: 'Fifth',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      description: 'Event five',
    },
    {
      id: '5',
      title: 'Sixth',
      imageurl: "https://www.townofscotlandneck.com/images/event.png",
      description: 'Event Six',
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
            <View style={styles.innerview}>
              <Image
                source={{ uri: item.imageurl }}
                style={[styles.img]}
              ></Image>
              <View>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color:'white' }}>{item.title}</Text>
                <Text style={{ fontSize: 16, color:'white'}}>{item.description}</Text>
              </View>
              </View>
            }
            /> 
            <TouchableOpacity style = {{position:'absolute',bottom:'5%',right:'4%',backgroundColor:'white',borderRadius:30,padding:'3%',justifyContent:'center',alignItems:'center',opacity:0.8}}>
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
    borderBottomWidth: 5,
    marginBottom:'2%'
  },
  body: {
    flex: 0.82,
    marginTop:'2%',
    marginBottom:'2%',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    height:'100%'

  },
  img: {
    width: 300,
    height: 120,
    margin: 5
  }
});