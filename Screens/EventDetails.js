
import { StyleSheet, Text, View,Image} from 'react-native';
import Header from '../component/Header';


export default function EventDetails({route,navigation}) {
  const {title,desc,venue,date,time} = route.params;
    function onNavigate (){
        navigation.pop();
    }
    return (
      // Main VIEW
        <View style={[styles.container]}>
          {/* TOP VIEW */}
          <Header title='Event Details' navi={() => onNavigate()}/>
          <View style= {styles.topView}>
            <Image
            style={styles.img}
            source={{
                uri: 'https://www.shutterstock.com/image-vector/upcoming-events-isolated-on-white-600w-1538520572.jpg',
            }}
      />
          </View>
          <View style={styles.bottomView}>
            <View style={styles.textView}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white',marginBottom:'3%'}}>{title}</Text>
                <Text style={{fontSize:15,color:'white'}}>{desc}</Text>
                <Text style={{fontWeight:'bold',fontSize:15,color:'white',marginTop:'1%'}}>Date: {date}</Text>
                <Text style={{fontWeight:'bold',fontSize:15,color:'white',marginTop:'1%'}}>Time: {time}</Text>
                <Text style={{fontWeight:'bold',fontSize:15,color:'white',marginTop:'1%'}}>Venue: {venue}</Text>
            </View>
          </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D'
  },
  topView:{
    flex:0.3,
  },
  img:{
    margin:'2%',
    height:'100%',
    width: '96%',
    borderRadius:8
  },
  bottomView:{
    flex: 0.7,
    alignItems:'center',
  },
  textView:{
    width:'85%',
    marginTop:'5%'
  }
});