import { StyleSheet, Text, View,FlatList,Image} from 'react-native';
import Footer from '../component/Footer';

export default function Events({navigation}) {
  const DATA = [
    {
      id: '0',
      title: 'First Item',
      imageurl:"https://www.townofscotlandneck.com/images/event.png",
      description:'Event one',
    },
    {
      id: '1',
      title: 'Second Item',
      imageurl:"https://www.townofscotlandneck.com/images/event.png",
      description:'Event two',
    },
    {
      id: '2',
      title: 'Third',
      imageurl:"https://www.townofscotlandneck.com/images/event.png",
      description:'Event three',
    },
    {
      id: '3',
      title: 'Fourth',
      imageurl:"https://www.townofscotlandneck.com/images/event.png",
      description:'Event four',
    },
    {
      id: '4',
      title: 'Fifth',
      imageurl:"https://www.townofscotlandneck.com/images/event.png",
      description:'Event five',
    },
    {
      id: '5',
      title: 'Sixth',
      imageurl:"https://www.townofscotlandneck.com/images/event.png",
      description:'Event Six',
    },
  ];
  
    return (
      // Main VIEW
        <View style={[styles.container]}>
          {/* TOP VIEW */}
            <View style = {styles.header}>
                <Text style={styles.headertxt}>Events</Text>
            </View>

          {/* Middle view */}
          <View style = {styles.body}>
             <FlatList
            data={DATA}
            keyExtractor={item => item.id}
            renderItem={({item}) =>
            <View style={styles.innerview}>
              <Image
              source = {{uri:item.imageurl}}
              style= {[styles.img]} 
              ></Image>
              <View>
              <Text style={{fontSize:30,fontWeight:'bold'}}>{item.title}</Text>
              <Text style={{fontSize:25}}>{item.description}</Text>
              </View>
              </View>
          }
            /> 
            </View>
            {/* Footer View */}
             <Footer/>
          </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#242527'
  },
  header: {
    flex: .15,
    backgroundColor: '#ce5c2b',
    justifyContent:'center',
    alignItems:'center'
  },
  headertxt:{
    fontSize:40,
    fontWeight:'bold'
  },
  innerview:{
    backgroundColor:'white',
    borderBottomWidth: 5
  },
  body: {
    flex: 0.77,
    marginTop:'2%',
    marginBottom:'2%',
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center',
    height:'100%'
  },
  img:{
    width:300,
    height:120,
    margin: 5
  }
});