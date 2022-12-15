import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';

export default function LostItems({navigation}) {

  const DATA = [
    {
      id: '0',
      title: 'Wrist Watch'
    },
    {
      id: '1',
      title: 'Wallet'
    },
    {
      id: '2',
      title: 'Glasses'
    },
    {
      id: '3',
      title: 'Phone/Laptop'
    },
    {
      id: '4',
      title: 'Other'
    }
  ]
  function onNavigate (){
    navigation.pop()
  }
  return (
    <View style={styles.container}>
    {/* HEADER */}
      <Header title='Lost Items' navi={() => onNavigate()}/>
    {/* BODY */}
    <View style = {styles.body}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
          <TouchableOpacity style= {styles.category}
             //onPress = {() => navigation.navigate('Home')}
          >
          <Text style={styles.FlatListText}> {item.title}</Text>    
          </TouchableOpacity>
          }
        /> 
      </View>
      {/* FOOTER */}
      <Footer/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242527'
  },
  body: {
    flex: 0.79,
    backgroundColor: '#242527',
    alignItems:'center',
    paddingTop:'10%'
  },
  category: {
    backgroundColor: 'white',
    margin: '6%',
    padding:'12%',
    borderRadius:10,
    borderWidth:2,
    borderColor:'#ce5c2b'
  },
  FlatListText: {
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold'
  }
});
