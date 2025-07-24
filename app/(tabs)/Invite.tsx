import Head from '@/components/Head';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import React from 'react';
import { Share, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Invite() {



     const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          "Try This App , it's free and helpful ! , sefoo.vercel.app (Created by Seifeldeen Ali)",
      });
    }
      catch(err) {
        console.log("error")
      }
  }
     
  return (
    <SafeAreaView >
      <Head title='Invite Friends' />

    <View style={{paddingHorizontal:20}}>
 <View>
     <Text style={{fontSize:40 , marginTop:40 , fontFamily:"Lexend-600"}}>
Invite Your Friends For big Community !
      </Text>
      <Text style={{fontFamily:"Lexend-500" , fontSize:16 , marginTop:12 , color:"#6e6e6aff"}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quas consequuntur aliquam quis accusantium ratione, dolorem iste mollitia libero facilis facere architecto fuga alias placeat a beatae, illum dolores minima?
      </Text>
 </View>

    <View style={{position:"relative"}}>
          <TextInput disableKeyboardShortcuts value='sefoo.vercel.app' style={{backgroundColor:"#f5f5f5ff" , borderWidth:1,borderColor:"#ccc" , borderRadius:15 , fontFamily:"Lexend-600" , marginTop:50 , padding:20 , height:60}} />
          <TouchableOpacity onPress={() => onShare()} style={{position:"absolute" , right:0 , justifyContent:"center",backgroundColor:"#f5f5f5ff" , borderWidth:1,borderColor:"#ccc", borderTopEndRadius:15  , borderBottomEndRadius:15 , marginTop:50 , padding:20 , height:60}}><Text style={{fontFamily:"Lexend-600"}}>Share</Text></TouchableOpacity>
    </View>

    <View style={{flexDirection:"row" , gap:30 , marginTop:60 , justifyContent:"center"}}>
<View style={{borderRadius:9999 , backgroundColor:"#e4e4e4ff" , padding:10 , width:60 , alignItems:"center" , justifyContent:"center" , height:60}}>
            <FontAwesome5 name="facebook" size={25}  />
</View>
<View style={{borderRadius:9999 , backgroundColor:"#e4e4e4ff" , padding:10 , width:60 , alignItems:"center" , justifyContent:"center" , height:60}}>
            <FontAwesome5 name="instagram" size={25}  />
</View>
<View style={{borderRadius:9999 , backgroundColor:"#e4e4e4ff" , padding:10 , width:60 , alignItems:"center" , justifyContent:"center" , height:60}}>
            <FontAwesome5 name="whatsapp" size={25}  />
</View>
<View style={{borderRadius:9999 , backgroundColor:"#e4e4e4ff" , padding:10 , width:60 , alignItems:"center" , justifyContent:"center" , height:60}}>
            <Feather name="mail" size={25}  />
</View>


    </View>
    
    </View>
    </SafeAreaView>
  )
}