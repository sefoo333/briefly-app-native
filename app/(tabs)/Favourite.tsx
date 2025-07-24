
import { Feather } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Favourites() {

    const data = ["All" , "Done" , "Favourite" , "Waiting" , "Pending" , "Cancelled"]
const notes = [
     {
      id: '1',
      time: '12:36',
      title: 'Plan for today',
      items: [
        'Check emails',
        'Team-sync',
        'Focus work session',
        'Quick review',
        'Lunch',
        'Plan next steps'
      ],
      locked: false
    },
    {
      id: '2',
      time: '18:05',
      title: 'Reading Session',
      items: [
        'Read 20-30 pages of Atomic Habits',
        'Highlight key points'
      ],
      locked: true
    },
    {
      id: '3',
      time: '18:30',
      title: 'Clean Up & Reset',
      items: [
        'Organize the desk',
        'Vacuum the room',
        'Wipe down surfaces',
        'Wipe down surfaces',
        'Wipe down surfaces',
        'Wipe down surfaces',
        'Create a calm space'
      ],
      locked: false
    },
    {
      id: '3',
      time: '18:30',
      title: 'Clean Up & Reset',
      items: [
        'Organize the desk',
        'Vacuum the room',
        'Wipe down surfaces',
        'Wipe down surfaces',
        'Wipe down surfaces',
        'Wipe down surfaces',
        'Create a calm space'
      ],
      locked: false
    },
]
  return (
    <SafeAreaView style={{paddingHorizontal:20 , paddingVertical:20}}>
      <View className='Header' style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , marginBottom:35}}>
        <Text className='HeaderText' style={{fontWeight:"600" , fontSize:30 , fontFamily:"Lexend-700"}}>My Favourites</Text>
        <View className="account">
            <Feather name='user' size={30} />
        </View>
      </View>

    <View className="search" style={{position:'relative'}}>
      <Feather
        name='search'
        size={20}
        style={{
        position: "absolute",
        left: 15,
        top: '50%',
        transform: [{ translateY: -20 }],
        zIndex: 1,
        color:"#808080ff"
        }}
      />
      <TextInput
        placeholder="Search Favourites"
        // onChangeText={setName}
        style={{...styles.input, fontFamily:"Lexend-600"}}
      />
    </View>

  {/* <FlatList
      data={notes}
      renderItem={({ item }) => (
        <View style={styles.box}>
<Text style={{fontSize:20 , fontWeight:600 ,}}>{item.title}</Text>
        </View>
      )}
      keyExtractor={(item) => item.id}
      numColumns={2}
      contentContainerStyle={{flexDirection:"row" , alignItems:"center" , justifyContent:"center" , flexWrap:"wrap" , gap:10 , marginTop:20}}
    /> */}

    <View style={{flexDirection:"row" , alignItems:"center" , justifyContent:"center" , flexWrap:"wrap" , gap:10 , marginTop:20}}>
                <View style={styles.box}>
<Text style={styles.title}>Summery1</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>
       </View> 
                <View style={{...styles.box}}>
<Text style={styles.title}>Summery2</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>

        </View>
                <View style={styles.box}>
<Text style={styles.title}>Summery3</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>

        </View>
                <View style={styles.box}>
<Text style={styles.title}>Summery4</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>

        </View>
                <View style={{...styles.box , width:"95%"}}>
<Text style={styles.title}>Summery5</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>

        </View>
    </View>


    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
   input:{
        height:50,
        padding:15,
        paddingLeft:50,
        marginBottom: 20,
        borderRadius:9999,
        borderWidth: 1,
        borderColor: '#ccc',
        position:"relative"
    },
    title:{fontSize:20 , fontWeight:600 , fontFamily:"Lexend-600"},
    badges:{paddingHorizontal:25 , marginHorizontal:5 , paddingVertical:7 ,backgroundColor:"#f3f5f5" , borderRadius:9999 , fontWeight:300 , fontFamily:"Lexend-600" , fontSize:18},
box:{ width:"45%",  overflow:"hidden", backgroundColor:"#cbececff" , height:200 , borderRadius:10 , padding:20 , marginTop:20},
})