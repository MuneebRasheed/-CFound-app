
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
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod semper tincidunt. Morbi vitae pulvinar dolor, sed elementum arcu. Nullam hendrerit neque eu eros scelerisque fringilla. Sed dignissim, enim nec dictum vulputate, massa enim volutpat sapien, et auctor mi enim vel est. Vestibulum tempus, dolor at lobortis tincidunt, ipsum nibh molestie augue, et interdum neque ante eu purus. Vivamus vulputate, ligula bibendum ullamcorper vestibulum, sem leo varius justo, sit amet rutrum magna turpis et nunc. Vivamus egestas mattis tellus, non lacinia nunc vulputate aliquet. Maecenas interdum pharetra ligula a placerat. Suspendisse nec velit dolor. Nam et felis nec elit suscipit interdum at ac lacus. Pellentesque suscipit velit sit amet mattis vehicula. Maecenas maximus nisl id urna vehicula fringilla. Nunc tempus ligula ac fringilla vulputate. Phasellus lacinia nec lorem a lobortis. Praesent a nunc turpis. Maecenas ac molestie diam.    Proin ac orci erat. Donec purus risus, luctus non mi at, fringilla bibendum nisi. Integer tempus scelerisque arcu a bibendum. Duis nec elit eget augue porta gravida vitae ut nunc. Fusce ac tellus porttitor, lobortis enim vitae, ultrices lacus. Vivamus placerat turpis metus, ut pellentesque risus venenatis eu. Proin rhoncus laoreet libero, sit amet maximus magna ullamcorper tristique. // akjsdhkjasdhksjahdkjashdkjashdkjashdkjashdkjashdkjaskjashdkjashdkjashdkjashdkjashdkjahsdaskjldfl;ksadgjlkjfl;kasdfjlasdh fkjhdfjhksjdhf kjhdsjkf hkjds hfkjh lkajsdljalwijlk sjdlkjakdjlaskjdlaksjdlkasjdlkaslkdj lkasjdlkasjldkjalksdj lkasjdlksajldkjalskdjlaksjdlkasjdlkasjdlkask fh'
    },
    {
      id: '1',
      title: 'Bus timing and routes in Exams',
      date: 'December 12-16, 2022',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod semper tincidunt. Morbi vitae pulvinar dolor, sed elementum arcu. Nullam hendrerit neque eu eros scelerisque fringilla. Sed dignissim, enim nec dictum vulputate, massa enim volutpat sapien, et auctor mi enim vel est. Vestibulum tempus, dolor at lobortis tincidunt, ipsum nibh molestie augue, et interdum neque ante eu purus. Vivamus vulputate, ligula bibendum ullamcorper vestibulum, sem leo varius justo, sit amet rutrum magna turpis et nunc. Vivamus egestas mattis tellus, non lacinia nunc vulputate aliquet. Maecenas interdum pharetra ligula a placerat. Suspendisse nec velit dolor. Nam et felis nec elit suscipit interdum at ac lacus. Pellentesque suscipit velit sit amet mattis vehicula. Maecenas maximus nisl id urna vehicula fringilla. Nunc tempus ligula ac fringilla vulputate. Phasellus lacinia nec lorem a lobortis. Praesent a nunc turpis. Maecenas ac molestie diam.    Proin ac orci erat. Donec purus risus, luctus non mi at, fringilla bibendum nisi. Integer tempus scelerisque arcu a bibendum. Duis nec elit eget augue porta gravida vitae ut nunc. Fusce ac tellus porttitor, lobortis enim vitae, ultrices lacus. Vivamus placerat turpis metus, ut pellentesque risus venenatis eu. Proin rhoncus laoreet libero, sit amet maximus magna ullamcorper tristique.'
    },
    {
      id: '2',
      title: 'Third',
      date: 'December 12-16, 2022',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod semper tincidunt. Morbi vitae pulvinar dolor, sed elementum arcu. Nullam hendrerit neque eu eros scelerisque fringilla. Sed dignissim, enim nec dictum vulputate, massa enim volutpat sapien, et auctor mi enim vel est. Vestibulum tempus, dolor at lobortis tincidunt, ipsum nibh molestie augue, et interdum neque ante eu purus. Vivamus vulputate, ligula bibendum ullamcorper vestibulum, sem leo varius justo, sit amet rutrum magna turpis et nunc. Vivamus egestas mattis tellus, non lacinia nunc vulputate aliquet. Maecenas interdum pharetra ligula a placerat. Suspendisse nec velit dolor. Nam et felis nec elit suscipit interdum at ac lacus. Pellentesque suscipit velit sit amet mattis vehicula. Maecenas maximus nisl id urna vehicula fringilla. Nunc tempus ligula ac fringilla vulputate. Phasellus lacinia nec lorem a lobortis. Praesent a nunc turpis. Maecenas ac molestie diam.    Proin ac orci erat. Donec purus risus, luctus non mi at, fringilla bibendum nisi. Integer tempus scelerisque arcu a bibendum. Duis nec elit eget augue porta gravida vitae ut nunc. Fusce ac tellus porttitor, lobortis enim vitae, ultrices lacus. Vivamus placerat turpis metus, ut pellentesque risus venenatis eu. Proin rhoncus laoreet libero, sit amet maximus magna ullamcorper tristique.'
    },
    {
      id: '3',
      title: 'Fourth',
      date: 'December 12-16, 2022',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod semper tincidunt. Morbi vitae pulvinar dolor, sed elementum arcu. Nullam hendrerit neque eu eros scelerisque fringilla. Sed dignissim, enim nec dictum vulputate, massa enim volutpat sapien, et auctor mi enim vel est. Vestibulum tempus, dolor at lobortis tincidunt, ipsum nibh molestie augue, et interdum neque ante eu purus. Vivamus vulputate, ligula bibendum ullamcorper vestibulum, sem leo varius justo, sit amet rutrum magna turpis et nunc. Vivamus egestas mattis tellus, non lacinia nunc vulputate aliquet. Maecenas interdum pharetra ligula a placerat. Suspendisse nec velit dolor. Nam et felis nec elit suscipit interdum at ac lacus. Pellentesque suscipit velit sit amet mattis vehicula. Maecenas maximus nisl id urna vehicula fringilla. Nunc tempus ligula ac fringilla vulputate. Phasellus lacinia nec lorem a lobortis. Praesent a nunc turpis. Maecenas ac molestie diam.    Proin ac orci erat. Donec purus risus, luctus non mi at, fringilla bibendum nisi. Integer tempus scelerisque arcu a bibendum. Duis nec elit eget augue porta gravida vitae ut nunc. Fusce ac tellus porttitor, lobortis enim vitae, ultrices lacus. Vivamus placerat turpis metus, ut pellentesque risus venenatis eu. Proin rhoncus laoreet libero, sit amet maximus magna ullamcorper tristique.'
    },
    {
      id: '4',
      title: 'Fifth',
      date: 'December 12-16, 2022',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod semper tincidunt. Morbi vitae pulvinar dolor, sed elementum arcu. Nullam hendrerit neque eu eros scelerisque fringilla. Sed dignissim, enim nec dictum vulputate, massa enim volutpat sapien, et auctor mi enim vel est. Vestibulum tempus, dolor at lobortis tincidunt, ipsum nibh molestie augue, et interdum neque ante eu purus. Vivamus vulputate, ligula bibendum ullamcorper vestibulum, sem leo varius justo, sit amet rutrum magna turpis et nunc. Vivamus egestas mattis tellus, non lacinia nunc vulputate aliquet. Maecenas interdum pharetra ligula a placerat. Suspendisse nec velit dolor. Nam et felis nec elit suscipit interdum at ac lacus. Pellentesque suscipit velit sit amet mattis vehicula. Maecenas maximus nisl id urna vehicula fringilla. Nunc tempus ligula ac fringilla vulputate. Phasellus lacinia nec lorem a lobortis. Praesent a nunc turpis. Maecenas ac molestie diam.    Proin ac orci erat. Donec purus risus, luctus non mi at, fringilla bibendum nisi. Integer tempus scelerisque arcu a bibendum. Duis nec elit eget augue porta gravida vitae ut nunc. Fusce ac tellus porttitor, lobortis enim vitae, ultrices lacus. Vivamus placerat turpis metus, ut pellentesque risus venenatis eu. Proin rhoncus laoreet libero, sit amet maximus magna ullamcorper tristique.'
    },
    {
      id: '5',
      title: 'Sixth',
      date: 'December 12-16, 2022',
      details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas euismod semper tincidunt. Morbi vitae pulvinar dolor, sed elementum arcu. Nullam hendrerit neque eu eros scelerisque fringilla. Sed dignissim, enim nec dictum vulputate, massa enim volutpat sapien, et auctor mi enim vel est. Vestibulum tempus, dolor at lobortis tincidunt, ipsum nibh molestie augue, et interdum neque ante eu purus. Vivamus vulputate, ligula bibendum ullamcorper vestibulum, sem leo varius justo, sit amet rutrum magna turpis et nunc. Vivamus egestas mattis tellus, non lacinia nunc vulputate aliquet. Maecenas interdum pharetra ligula a placerat. Suspendisse nec velit dolor. Nam et felis nec elit suscipit interdum at ac lacus. Pellentesque suscipit velit sit amet mattis vehicula. Maecenas maximus nisl id urna vehicula fringilla. Nunc tempus ligula ac fringilla vulputate. Phasellus lacinia nec lorem a lobortis. Praesent a nunc turpis. Maecenas ac molestie diam.    Proin ac orci erat. Donec purus risus, luctus non mi at, fringilla bibendum nisi. Integer tempus scelerisque arcu a bibendum. Duis nec elit eget augue porta gravida vitae ut nunc. Fusce ac tellus porttitor, lobortis enim vitae, ultrices lacus. Vivamus placerat turpis metus, ut pellentesque risus venenatis eu. Proin rhoncus laoreet libero, sit amet maximus magna ullamcorper tristique.'
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
            <TouchableOpacity
            onPress={()=> {navigation.navigate('AnnouncementDetails',{
              title: item.title,
              desc: item.details
            })}}
            >
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
            <TouchableOpacity style = {styles.addbuttonopacity}
            onPress={()=>{navigation.navigate('AnnouncementAdd')}}>
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