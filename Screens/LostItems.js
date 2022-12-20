import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import Footer from '../component/Footer';
import Header from '../component/Header';

export default function LostItems({ navigation }) {

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
  function onNavigate() {
    navigation.pop()
  }
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <Header title='Lost Items' navi={() => onNavigate()} />
      {/* BODY */}
      <View style={styles.body}>
        <FlatList
          data={DATA}
          keyExtractor={item => item.id}
          renderItem={({ item }) =>
            <TouchableOpacity style={styles.category}
              onPress={() => navigation.navigate('ItemCategory', { title: item.title })}
            >
              <Text style={styles.FlatListText}> {item.title}</Text>
            </TouchableOpacity>
          }
        />
      </View>
      {/* FOOTER */}
      <Footer />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D'
  },
  body: {
    flex: 0.82,
    backgroundColor: '#3D3D3D',
    alignItems: 'center',
    paddingTop: '10%'
  },
  category: {
    backgroundColor: '#242527',
    margin: '6%',
    padding: '12%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ce5c2b'
  },
  FlatListText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  }
});
