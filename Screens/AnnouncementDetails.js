
import { StyleSheet, Text, View,Image} from 'react-native';
import Header from '../component/Header';


export default function AnnouncementDetails({route,navigation}) {
  const {title,desc} = route.params;
    function onNavigate (){
        navigation.pop();
    }
    return (
      // Main VIEW
        <View style={[styles.container]}>
          {/* TOP VIEW */}
          <Header title='Announcement Details' navi={() => onNavigate()}/>
          <View style={styles.mainView}>
            <View style={styles.textView}>
                <Text style={{fontWeight:'bold',fontSize:20,color:'white',marginBottom:'3%'}}>{title}</Text> 
                <Text style={{fontSize:15,color:'white'}}>{desc}</Text>
            </View>
          </View>
          
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D',
  },
  mainView:{
    flex: 0.89,
    alignItems:'center',
    justifyContent:'center',
  },
  textView:{
    width:'83%',
    height:'90%',
  }
});