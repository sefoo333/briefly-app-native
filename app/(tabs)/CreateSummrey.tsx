import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { addDoc, collection } from 'firebase/firestore';
import React, { useRef, useState } from 'react';
import { Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { RichEditor, RichToolbar, actions } from 'react-native-pell-rich-editor';
import { db } from '../config';

export default function CreateSummrey() {
  const richText:any = useRef(null);
const [title, setTitle] = useState("");
const colors = ["#FFF9C4" , "#F8BBD0" , "#E1BEE7" , "#C8E6C9	" ,"#B3E5FC"];
const addData = async (re:string[]) => {
  try {
    const docRef = await addDoc(collection(db, "summries"), {
      title:title,
     id:Date.now(),
     Data:await re || [],
     createdAt: new Date().toISOString(), 
     background:colors[Math.floor(Math.random() * colors.length)]
    });
    console.log("✅ Document written with ID:", docRef.id);
  } catch (error) {
    console.error("❌ Error adding document:", re);
  }
};  
const {navigate}:any = useNavigation();
  return (
    <SafeAreaView style={{position:"relative",marginTop:30 ,  flex:1 , justifyContent:"space-between"}}>
        
      <View style={{paddingHorizontal:30 ,marginBottom:20 , marginTop:30 , flexDirection:"row" , justifyContent:"space-between" , alignItems:"center"}}>
<Ionicons name='arrow-back' size={30} onPress={() => navigate("Home")} />

<TouchableOpacity onPress={() => {
  addData(richText?.current?.getContentHtml())
  setTimeout(() => navigate("Home"),1000)
}} style={{paddingHorizontal:14 , flexDirection:"row" , alignItems:"center" , gap:10 , paddingVertical:8 , borderRadius:9999 , backgroundColor:"#eceef0"}}>
{/* <MaterialCommunityIcons name='folder-outline' size={22} /> */}
<Ionicons name='checkmark-circle' size={22} />
<Text style={{fontFamily:"Lexend-600"}}>
Done
</Text>
</TouchableOpacity>

<Entypo name='dots-three-horizontal' size={30} />
      </View>

      <TextInput onChangeText={(e) => setTitle(e)} style={{width:"95%" , height:80 , fontSize:25 , backgroundColor:"#f1f1f1ff" , marginTop:15 , borderRadius:15 , fontFamily:"Lexend-600" , padding:25 , paddingLeft:5}} placeholder='Title Summrey' />

       {Platform.OS !== "web" && (
        
        <>
        
         <RichEditor
        ref={richText}
        style={{ flex: 1 , minHeight:500 }}
        placeholder="Write Here"
        editorInitializedCallback={() => {
            
        }}
      />
      <RichToolbar
      style={{height:70 , width:"100%"}}
      editor={richText}
      actions={[
          actions.setBold,
          actions.setItalic,
          actions.setUnderline,
          actions.insertBulletsList,
          actions.insertOrderedList,
          actions.insertLink,
          actions.heading1,
          actions.alignCenter,
          actions.alignLeft,
          actions.alignRight,
          actions.undo
        ]} />
        </>
       )}
    
      
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  richEditor: {
    flex: 1,
    minHeight: 300,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
});