import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
const Screen2 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image
          style={styles.pic}
          source={require('../assets/picture.png')} />
          
      </View>
      <View>
      <Text style={styles.text}>Looking for your Lost Items..?</Text>
      </View>
      <View>
      <Text style={styles.text2}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.text2}>consectetur.Sit sed libero faucibus </Text>
      <Text style={styles.text2}>sed vitae aliquam non vulputate.Nunc </Text>
      <Text style={styles.text2}>enim mollis nunc blandit</Text>
      </View>
      <View style={styles.next}>
      <Text style={{color:"white",fontSize:20}}> Next</Text>
      <MaterialIcons name="navigate-next" size={30} color='#DA692F' />
      </View>
    </View>
  )
}

export default Screen2

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#242527',
        justifyContent:"center"

    },
    content:{
        flex:0.7,
        // backgroundColor:"red",
        justifyContent:"flex-start",
        alignItems:"flex-start",
    
     },
     pic: {
      width: "100%",
      height: "100%",
    
    },
    text:{
      color:"white",fontSize:30,fontWeight:"bold",paddingLeft:30
    },
    text2:{
      color:"white",
      fontSize:15,
      paddingLeft:30
      
    },
    next:{
      flex:0.1,
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
    }
    
})