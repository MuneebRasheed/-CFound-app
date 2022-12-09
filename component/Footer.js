import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, ImageBackground } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";

export default function footer() {

    return (

            <View style = {styles.footer}>
            <TouchableOpacity>
            <Ionicons style={styles.Icon} name="home" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons style={styles.Icon} name="chatbubbles" size={30} />
            </TouchableOpacity>
            <TouchableOpacity>
            <Ionicons style={styles.Icon} name="person" size={30} />
            </TouchableOpacity>         
            </View>

);
}
const styles = StyleSheet.create({
footer: {
    flex: 0.08,
    backgroundColor: '#ce5c2b',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    borderTopLeftRadius:20,
    borderTopRightRadius:20
  },
  Icon: {
    color: 'white',
    alignSelf:'center',
    marginLeft:'10%',
    marginRight:'10%'
  }
});
