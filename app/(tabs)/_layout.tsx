import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CreateSummrey from './CreateSummrey';
import Favourites from './Favourite';
import Main from './Main';
import Profile from './Profile';


const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  const [login , setLogin] = useState(false)
  const {navigate}: any = useNavigation();
  return (
    <Tab.Navigator
    initialRouteName={login ? "login" : "Home"}
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >

      
      <Tab.Screen name="Home" component={Main} options={{
        title:"Home",
        tabBarIcon: ({ focused }) => (
            <View style={{alignItems:"center" , justifyContent:"center"}}>
              <Ionicons name="home-outline" size={24} color={focused ? '#6C63FF' : 'black'} />
              <Text style={{fontSize:10 , textAlign:"center"}}>Home</Text>
            </View>
        ),
      }} />

      {/* <Tab.Screen name="Calendar" component={TabTwoScreen} options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name="calendar-outline" size={24} color={focused ? '#6C63FF' : 'black'} />
        ),
      }} /> */}
{/* 
            <Tab.Screen name="login" component={Login} options={{
              tabBarStyle:{display:"none"},
              headerShown:false,
            }} /> */}
      
<Tab.Screen name="ai" component={Main} options={{
  tabBarIcon: ({ focused }) => (
                <View style={{alignItems:"center" , justifyContent:"center"}}>
    <MaterialCommunityIcons name="robot-outline" size={24} color={focused ? '#6C63FF' : 'black'} />
              <Text style={{fontSize:10 , textAlign:"center"}}>AI</Text>
</View>
  ),
}} />

      <Tab.Screen name="AddButton" component={CreateSummrey} options={{
        tabBarIcon: () => (
          // <TouchableOpacity style={styles.addButton}>
          <View style={{alignItems:"center" , justifyContent:"center"}}>
            <Ionicons name="create-outline" size={30} color="black" />
            <Text style={{fontSize:10 , textAlign:"center"}}>Create</Text>
          </View>
          // </TouchableOpacity>
        ),
        tabBarLabel:"",
        tabBarStyle: { display: 'none' }
      }}
      
      />

      <Tab.Screen name="Favourites" component={Favourites} options={{
        tabBarIcon: ({ focused }) => (
                      <View style={{alignItems:"center" , justifyContent:"center"}}>

          <Ionicons name="heart-outline" size={24} color={focused ? '#6C63FF' : 'black'} />
                        <Text style={{fontSize:10 , textAlign:"center"}}>MyFav</Text>
</View>
        ),
      }} />

      <Tab.Screen name="Profile" component={Profile} options={{
        tabBarIcon: ({ focused }) => (
                      <View style={{alignItems:"center" , justifyContent:"center"}}>

          <Ionicons name="person-outline" size={24} color={focused ? '#6C63FF' : 'black'} />
              <Text style={{fontSize:10 , textAlign:"center"}}>Profile</Text>
</View>
        ),
      }} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: 'white',
    height: 65,
    paddingTop:10,
    borderTopWidth: 0,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
    color:"black",
    
  },
  addButton: {
    backgroundColor: '#6C63FF',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
    elevation: 5,
  }
});
