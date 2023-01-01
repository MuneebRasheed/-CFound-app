
import { StyleSheet, Text, View, TouchableOpacity,Alert} from 'react-native';
import Header from '../component/Header';
import Input from '../component/Input';
import { useState } from 'react';



export default function AnnouncementAdd({ navigation }) {
  const [time,settime] = useState('1')
  const [tme,settme] = useState('AM')
  function onNavigate (){
    navigation.pop()
  }
    return (
      // Main VIEW
        <View style={[styles.container]}>
          {/* TOP VIEW */}
          <Header title='Add an Announcement' navi={() => onNavigate()}/>
          {/* Middle view */}

          <View style = {styles.body}>
            <View style = {styles.titleView}>
              <Text style={styles.titletxt}>List a new Announcement</Text>
            </View>
            <View style={styles.items}>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',right:'40%',color:'white'}}>Title:</Text>
              <Input placeholder={'Enter title'}/>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',right:'40%',color:'white'}}>Date:</Text>
              <Input placeholder={'Enter Date'}/>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',right:'40%',color:'white'}}>Details:</Text>
              <Input placeholder={'Enter Details'}/>
            </View>
          </View>
          <View style = {styles.bottom}>
            <TouchableOpacity
            onPress={()=> {Alert.alert('pressed')}}
            style={styles.addBtn}>
              <Text style={styles.addText}>Add</Text>
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
  body: {
    flex: .8,
    width:'100%',
    marginBottom:'5%'
  },
  titleView:{
    flex:.15,
    alignItems:'center',
    justifyContent:'center',
  },
  titletxt:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  items:{
    flex:.85,
    alignItems:'center'
  },
  bottom:{
    flex: .09,
    alignItems:'center',
  },
  addBtn: {
    width: "55%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA692F',
    height: 40,
    borderRadius: 20
  },
  addText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
});