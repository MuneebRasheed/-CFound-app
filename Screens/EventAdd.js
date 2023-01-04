
import { StyleSheet, Text, View, TouchableOpacity,Button,Alert} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from '../component/Header';
import Input from '../component/Input';
import { useState } from 'react';



export default function EventAdd({ navigation }) {
  const [time,settime] = useState('1')
  const [tme,settme] = useState('AM')
  function onNavigate (){
    navigation.pop()
  }
    return (
      // Main VIEW
        <View style={[styles.container]}>
          {/* TOP VIEW */}
          <Header title='Add Event' navi={() => onNavigate()}/>
          {/* Middle view */}

          <View style = {styles.body}>
            <View style = {styles.titleView}>
              <Text style={styles.titletxt}>List a new Event</Text>
            </View>
            <View style={styles.items}>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',color:'white'}}>Title:</Text>
              <Input placeholder={'Enter title'}/>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',color:'white'}}>Date:</Text>
              <Input placeholder={'Enter Date'}/>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',color:'white'}}>Time:</Text>
              <View style={{flexDirection:'row',borderRadius:50}}>
                <Picker style={styles.timepicker}
                selectedValue={time}
                onValueChange={(item)=> settime(item)}>
                  <Picker.Item label='1' value={'1'}/>
                  <Picker.Item label='2' value={'2'}/>
                  <Picker.Item label='3' value={'3'}/>
                  <Picker.Item label='4' value={'4'}/>
                  <Picker.Item label='5' value={'5'}/>
                  <Picker.Item label='6' value={'6'}/>
                  <Picker.Item label='7' value={'7'}/>
                  <Picker.Item label='8' value={'8'}/>
                  <Picker.Item label='9' value={'9'}/>
                  <Picker.Item label='10' value={'10'}/>
                  <Picker.Item label='11' value={'11'}/>
                  <Picker.Item label='12' value={'12'}/>
                </Picker>
                <Picker style={styles.timepicker} 
                selectedValue={tme}
                onValueChange={(item)=> settme(item)}>
                  <Picker.Item label='AM' value={'am'}/>
                  <Picker.Item label='PM' value={'pm'}/>
                </Picker>
              </View>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',color:'white'}}>Venue:</Text>
              <Input placeholder={'Enter Venue'}/>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',color:'white'}}>Details:</Text>
              <Input placeholder={'Enter Details'}/>
              <Text style={{margin:'2%',fontSize:15,fontWeight:'bold',color:'white'}}>Add image:</Text>
              <View style= {{width:'80%',backgroundColor:'white',padding:'3%',borderRadius:8}} >
                <TouchableOpacity style = {styles.addIcon}>
                  <Ionicons style={{color: 'black'}} name="add" size={38} />
                </TouchableOpacity>
              </View>
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
    flex:.1,
    alignItems:'center',
    justifyContent:'center',
  },
  titletxt:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  items:{
    flex:.89,
    left:'9%'
  },
  timepicker:{
    width:'40%',
    backgroundColor:'white',
    margin:'.05%',
    borderRadius:50
  },
  bottom:{
    flex: .09,
    alignItems:'center',
  },
  addBtn: {
    width: "80%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA692F',
    height: '70%',
    borderRadius: 20
  },
  addText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold'
  },
  addIcon: {
    alignSelf:'center',
    backgroundColor:'grey',
    borderRadius:50,
    opacity:0.6,
    padding:'2%'
  }
});