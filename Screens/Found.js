import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, ImageBackground,FlatList } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from '../component/Footer.js';
import Header from '../component/Header';

export default function Found({ navigation,route }) {
    const DATA = [
        {
          id: '0',
          title: 'Rolex Watch lost near cafeteria',
          date: 'Oct 15, 2022',
          description: 'Rolex Gold Watch with black strips',
          imageurl: "https://5.imimg.com/data5/SELLER/Default/2020/9/EX/VH/QG/26510561/new-product-1000x1000.jpeg"
        },
        {
            id: '1',
            title: 'Sveston Watch lost near A block',
            date: 'Oct 14, 2022',
            description: 'Sveston Gold Watch with brown strips',
            imageurl: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/IMG_3900_1200x.jpg?v=1671108959"
          },
          {
            id: '2',
            title: 'Rolex Watch lost near cafeteria',
            date: 'Oct 12, 2022',
            description: 'Rolex Gold Watch with black strips',
            imageurl: "https://www.bobswatches.com/rolex-blog/wp-content/uploads/2021/09/Rolex-Watches-buying-guide-1.png"
          },
          {
            id: '3',
            title: 'Sveston Watch lost near D block',
            date: 'Oct 14, 2022',
            description: 'Sveston Ostego Emperor hand Watch Black Color ',
            imageurl: "https://cdn.shopify.com/s/files/1/0003/5815/4293/products/C-SV-9676-2-2_1200x.jpg?v=1637669392"
          }
      ];
    function onNavigate (){
        navigation.pop()
      }
    return (
        <View style={styles.container}>
        {/* HEADER */}
          <Header title={route.params.title} navi={() => onNavigate()}/>
        {/* BODY */}
            <View style={styles.bodyTop}>
                <TouchableOpacity style={styles.button}
                onPress= {() => navigation.navigate('Lost',{title: route.params.title})}>
                    <Text style={styles.buttonText}>Lost</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Found</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:0.89}}>
            <FlatList
                showsVerticalScrollIndicator ={false}
                showsHorizontalScrollIndicator={false}
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                <View style={styles.body}>
                        <Image
                        source={{ uri: item.imageurl }}
                        style={[styles.img]}
                        ></Image>
                    <View style= {{padding:'4%',flexShrink: 1}}>
                        <Text style={{color:'white',fontSize:18,marginBottom:'3%'}}>{item.title}</Text>
                        <Text style={{color:'white',fontSize:12,marginBottom:'3%'}}>{item.date}</Text>
                        <Text style={{color:'grey',fontSize:12}}>{item.description}</Text>
                        <TouchableOpacity>
                            <Text style={styles.found}>Claim</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                }
            /> 
            <TouchableOpacity style = {styles.addIcon}>
            <Ionicons style={{color: 'black'}} name="add" size={38} />
            </TouchableOpacity>
            </View>
          
        </View>
    );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D',
  },
  bodyTop: {
    flex:0.09,
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  button: {
    backgroundColor:'#242527',
    padding:'2%',
    width:'36%',
    borderRadius:10,
    borderWidth:1,
    borderColor:'#ce5c2b'
  },
  buttonText: {
    color:'white',
    textAlign:'center'
  },
  body: {
    flexDirection:'row',
    backgroundColor: '#242527',
    marginBottom:'4%',
    width:'80%',
    alignSelf:'center',
    borderRadius:10,
    borderColor:'white',
    borderWidth:0.3
  },
  img: {
    width: '35%',
    height: '100%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius:10
  },
  found: {
    color:'#ce5c2b',
    fontSize:16,
    fontWeight:'bold',
    textAlign:'right'
  },
  addIcon: {
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