import Head from '@/components/Head'
import { Entypo, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Account() {
  return (
    <SafeAreaView>
    <Head title="Account" />
            <View style={{padding:20}}>
      <View style={{height:300, width:"100%" , justifyContent:"center" , alignItems:"center" , padding:20}}>
<View>
            <Image style={{width:90 , height:90 , borderRadius:9999}} source={require("@/assets/images/sefoo.jpg")} />
<View style={{position:"absolute" , right:5 , bottom:0,width:30 , height:30 , backgroundColor:"#2281eeff" , borderRadius:9999 , alignItems:"center" , justifyContent:"center"}}>
<Entypo name='plus' size={17} color={"white"} />
</View>
</View>
        <Text style={{fontFamily:"Lexend-600" , fontSize:20 ,marginTop:10}}>Seifeldeen Ali</Text>
        <Text style={{fontFamily:"Lexend-500" , color:"#808080ff" , fontSize:15}}>seifali@gmail.com</Text>
      </View>

      <View >
        <View style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             {/* <Ionicons name='person' size={21} color={"black"} /> */}
            <Text style={{fontFamily:"Lexend-600" , fontSize:18}}>Account Name</Text>
           </View>
                       <View style={{flexDirection:"row" , alignItems:"center" , gap:10}}>
                        <Text style={{fontFamily:"Lexend-500" , fontSize:15 , color:"#504f4fff"}}>SeifAli</Text>
                        <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
                       </View>
        </View>
        <View style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             {/* <Ionicons name='person' size={21} color={"black"} /> */}
            <Text style={{fontFamily:"Lexend-600" , fontSize:18}}>Email</Text>
           </View>
                       <View style={{flexDirection:"row" , alignItems:"center" , gap:10}}>
                        <Text style={{fontFamily:"Lexend-500" , fontSize:15 , color:"#504f4fff"}}>seifali@gmail.com</Text>
                        <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
                       </View>
        </View>
        <View style={styles.box}>
           <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             {/* <Ionicons name='person' size={21} color={"black"} /> */}
            <Text style={{fontFamily:"Lexend-600" , fontSize:18}}>Password</Text>
           </View>
                       <View style={{flexDirection:"row" , alignItems:"center" , gap:10}}>
                        <Text style={{fontFamily:"Lexend-500" , fontSize:15 , color:"#504f4fff"}}>***********</Text>
                        <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
                       </View>
        </View>
        <View style={styles.box}>
          <View style={{flexDirection:"row" , alignItems:"center" , gap:15}}>
             {/* <Ionicons name='person' size={21} color={"black"} /> */}
            <Text style={{fontFamily:"Lexend-600" , fontSize:18 , color:"#f86666ff"}}>Delete Account</Text>
           </View>
                        <MaterialIcons name='arrow-forward-ios' size={24} color={"black"} />
        </View>
       
      
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
backgroundColor:"#f7f6f6ff",
borderRadius:15,
marginBottom:20,
gap:30
}
})