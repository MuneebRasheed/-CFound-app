
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity} from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';
import FontAwesome from "react-native-vector-icons/FontAwesome5";


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
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item.title}</Text>
                <Text style={{ fontSize: 25 }}>{item.description}</Text>
              </View>
              </View>
            }
            /> 
            <TouchableOpacity style = {{position:'absolute',bottom:'2%',right:'-8%',backgroundColor:'#ce5c2b',borderRadius:50,padding:'6%',justifyContent:'center',alignItems:'center'}}>
            <FontAwesome style={{color: 'white' }} name="edit" size={27} />
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
    backgroundColor: '#242527'
  },
  innerview:{
    backgroundColor:'white',
    borderBottomWidth: 5
  },
  body: {
    flex: 0.79,
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