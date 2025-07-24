import Head from '@/components/Head'
import { AntDesign, FontAwesome5, Fontisto, Ionicons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Profile() {

  const {navigate}:any = useNavigation();



  return (
    <SafeAreaView>
    <Head title="Profile" />
            <View style={{padding:20}}>
      <View style={{height:300 , width:"100%" , justifyContent:"center" , alignItems:"center" , padding:20}}>
        <Image style={{width:90 , height:90 , borderRadius:9999}} source={require("@/assets/images/sefoo.jpg")} />
        <Text style={{fontFamily:"Lexend-600" , fontSize:20 ,marginTop:10}}>Seifeldeen Ali</Text>
        <Text style={{fontFamily:"Lexend-500" , color:"#808080ff" , fontSize:15}}>seifali@gmail.com</Text>
      </View>

      <View >
        <TouchableOpacity onPress={() => navigate("account")} style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             <Ionicons name='person' size={21} color={"black"} />
            <Text style={{fontFamily:"Lexend-500" , fontSize:18}}>Account</Text>
           </View>
                       <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("Favourites")} style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             <AntDesign name='heart' size={21} color={"black"} />
            <Text style={{fontFamily:"Lexend-500" , fontSize:18}}>Favourites</Text>
           </View>
                       <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>alert("comming soon , version 2.0")} style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             <MaterialIcons name='quiz' size={21} color={"black"} />
            <Text style={{fontFamily:"Lexend-500" , fontSize:18}}>Quizs</Text>
           </View>
                       <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigate("invite")} style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             <FontAwesome5 name='user-plus' size={21} color={"black"} />
            <Text style={{fontFamily:"Lexend-500" , fontSize:18}}>Invite Friends</Text>
           </View>
                       <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => Alert.alert("About Me","Application Created By seifeldeen Ali Mohamed ,  for more you can visit my website :D => sefoo.vercel.app")} style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             <Fontisto name='world' size={21} color={"black"} />
            <Text style={{fontFamily:"Lexend-500" , fontSize:18}}>About Us</Text>
           </View>
                       <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
        </TouchableOpacity>
      </View>

    </View>
  </SafeAreaView>
  )
}


const styles = StyleSheet.create({
box:{
flexDirection:"row",
alignItems:"center",
padding:18,
justifyContent:"space-between",
backgroundColor:"#eeececff",
borderRadius:15,
marginBottom:20,
gap:30
}
})