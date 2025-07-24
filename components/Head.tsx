import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, View } from 'react-native';

export default function Head({title}:{title:string}) {
  const {navigate}:any = useNavigation();
  return (
   <View style={{flexDirection:"row" , alignItems:"center" , gap:5 , padding:20}}>
            <MaterialIcons name='arrow-back-ios' size={28} color={"black"} onPress={() => navigate("Tabs")} />
            <Text style={{fontSize:22 , fontFamily:"Lexend-600"}}>{title}</Text>
        </View>
  )
}