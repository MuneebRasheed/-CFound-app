import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Button } from 'react-native-web'

const Screen4 = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
      <Image
          style={styles.pic}
          source={require('../assets/pic.png')} />
          
      </View>
      <View>
      <Text style={styles.text}>Events coming up this week..?!</Text>
      </View>
      <View>
      <Text style={styles.text2}>Lorem ipsum dolor sit amet</Text>
      <Text style={styles.text2}>consectetur.Sit sed libero faucibus </Text>
      <Text style={styles.text2}>sed vitae aliquam non vulputate.Nunc </Text>
      <Text style={styles.text2}>enim mollis nunc blandit</Text>
      </View>
      
    </View>
  )
}

export default Screen4

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#242527',
        justifyContent:"center"

    },
    content:{
        flex:0.6,
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
      
    }
})