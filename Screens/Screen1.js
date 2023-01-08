import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const screen1 = () => {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
                <Image
                    style={styles.cap}
                    source={require('../assets/logincap.png')} />
        
            <View style={{flexDirection:"row"}}>
                <Text style={{color:"white",fontSize:30,fontWeight:'bold'}} >Squad</Text>
                <Text style={{color:"white",fontSize:30,color:'#DA692F'}}>Help</Text>
            </View>
          <Text style={{color:"white",fontSize:20}}> CUI Lahore</Text>
        </View>
         
       
      
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#242527',
        justifyContent:"center"
      },
      cap: {
       
        width: '30%',
        height: '30%',
      marginRight:10
      },
     content:{
        flex:0.5,
        // backgroundColor:"red",
        justifyContent:"center",
        alignItems:"center",
    
     } 
})
export default screen1

