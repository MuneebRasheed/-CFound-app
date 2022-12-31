import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Home from '../Screens/Home';
import Chat from '../Screens/Chat';
import Profile from '../Screens/Profile';

const Tab = createBottomTabNavigator();



const BottomTabNavigator = () => {
  return (
    <Tab.Navigator 
    screenOptions={{ 
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {backgroundColor: '#242527',height:'7%',borderTopLeftRadius:15,borderTopRightRadius:15,position:'absolute',borderTopWidth:0} 
    }}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="home" color={ focused ? "#ce5c2b" : "white"} size={30} />
            )
          }}
        />
      <Tab.Screen 
        name="Chat" 
        component={Chat} 
        options={{
            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name="chat" color={ focused ? "#ce5c2b" : "white"} size={30} />
              )
          }}
        />
      <Tab.Screen 
        name="Profile" 
        component={Profile} 
        options={{
            tabBarIcon: ({ focused }) => (
                <MaterialCommunityIcons name="account" color={ focused ? "#ce5c2b" : "white"} size={30} />
              )
          }}
        />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator ;

