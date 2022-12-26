
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet } from 'react-native';
import Home from './Screens/Home';
import Events from './Screens/Events';
import LostItems from './Screens/LostItems';
import Chat from './Screens/Chat';
import Login from './Screens/Login';
import ItemCategory from './Screens/ItemCategory';
import Signup from './Screens/Signup';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>


      <Stack.Navigator screenOptions={{ headerShown: false }}>
      
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />

        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chat" component={Chat} />
        
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="LostItems" component={LostItems} />
        
        <Stack.Screen name="ItemCategory" component={ItemCategory} />


      </Stack.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
