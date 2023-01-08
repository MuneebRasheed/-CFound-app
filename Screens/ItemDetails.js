import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image } from 'react-native';
import Header from '../component/Header';

export default function ItemDetails({ navigation, route }) {
  function onNavigate() {
    navigation.pop()
  }
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header title={route.params.title} navi={() => onNavigate()} />
      {/* BODY */}
      <View style={styles.body}>

        <Image
          source={{ uri: route.params.item.url }}
          style={[styles.img]}
        ></Image>
        <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold', margin: '4%' }}>{route.params.item.Title}</Text>
        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500', marginLeft: '4%' }}>{route.params.item.time}</Text>
        <Text style={{ color: 'white', fontSize: 18, margin: '4%' }}>{route.params.item.Description}</Text>
        <TouchableOpacity
          //onPress={() => {navigation.navigate("Home")}}
          style={styles.Btn}
        >
          <Text style={styles.loginText}>Found</Text>
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
    flex: 0.89,
    backgroundColor: '#3D3D3D',
    paddingTop: '5%'
  },
  img: {
    alignSelf: 'center',
    width: '90%',
    height: '30%',
  },
  Btn: {
    width: "80%",
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DA692F',
    height: '7%',
    borderRadius: 8,
    position: 'absolute',
    bottom: '25%'
  },
  loginText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold'
  },
});
