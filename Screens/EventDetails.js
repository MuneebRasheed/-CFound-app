
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import Header from '../component/Header';
import ItemDetails from './ItemDetails';


export default function EventDetails({ route, navigation }) {
  const { title, desc, venue, date, time } = route.params;
  function onNavigate() {
    navigation.pop();
  }
  return (
    // Main VIEW
    <View style={[styles.container]}>
      {/* TOP VIEW */}
      <Header title='Event Details' navi={() => onNavigate()} />
      <View style={styles.topView}>
        <Image
          style={styles.img}
          source={{
            uri: route.params.uri,
          }}
        />
      </View>
      <View style={styles.bottomView}>
        <ScrollView style={styles.textView}>
          <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'white', marginBottom: '3%' }}>{title}</Text>
          <Text style={{ fontSize: 15, color: 'white' }}>{desc}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: '1%' }}>Date: {date}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: '1%' }}>Time: {time}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 15, color: 'white', marginTop: '1%' }}>Venue: {venue}</Text>
        </ScrollView>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3D3D3D'
  },
  topView: {
    flex: 0.3,
  },
  img: {
    margin: '2%',
    height: '100%',
    width: '96%',
    borderRadius: 8
  },
  bottomView: {
    flex: 0.7,
    alignItems: 'center',
  },
  textView: {
    width: '85%',
    marginTop: '5%',
    marginBottom: '5%'
  }
});