
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Dimensions, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';
import { db } from '../config';

export default function Main() {

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


const [MyData, setData] = useState<any[]>([]);

const {navigate}:any = useNavigation();

const fetchSummaries = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'summries'));
    
    const allData: any[] = [];
    
    querySnapshot.forEach((doc) => {
      allData.push({ id: doc.id, ...doc.data() }); // لو محتاج الـ id
    });
    
    setData(allData);
  } catch (error) {
    console.error('❌ Error fetching data:', error);
  }
};

useEffect(() => {
  fetchSummaries();
}, []);


const [refreshing, setRefreshing] = useState(false);


const onRefresh = async () => {
  setRefreshing(true);
  await fetchSummaries()
  setRefreshing(false);
};

  const { width } = useWindowDimensions();

  function limitHtmlParagraphs(html:string, maxParagraphs = 3) {
  const matches = html.match(/<p[^>]*>.*?<\/p>/g); // يجيب كل الفقرات
  if (!matches) return html;
  return matches.slice(0, maxParagraphs).join('');
}


const [search , setSearch] = useState("")


useEffect(() => {
  const dd = () => {
    const filter = MyData.filter((e) => e.title.startsWith(search));
if (filter.length !== 0 && search !== ""){
    setData(filter)
} else {
fetchSummaries()
}
  }

  dd()
}, [search]);

  return (
   <SafeAreaView style={{paddingHorizontal:10}}>
      <View className='Header' style={{flexDirection:"row" , justifyContent:"space-between" , alignItems:"center" , marginBottom:35}}>
        <Text className='HeaderText' style={{fontWeight:"600" , fontSize:30 , fontFamily:"Lexend-700"}}>My Summries</Text>
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
      onChangeText={(e) => setSearch(e)}
        placeholder="Search Summries"
        // onChangeText={setName}
        style={{...styles.input, fontFamily:"Lexend-600"}}
      />
    </View>

    <View style={{flexDirection:"row" , gap:20}}>
           <FlatList
            data={data}
            style={{flexDirection:"row",gap:10}}
            renderItem={({item}) => (
              <Text style={styles.badges}>{item}</Text>
            )}
            keyExtractor={(item) => item}
            horizontal
            showsHorizontalScrollIndicator={true}
            />
    </View>
 

     <ScrollView showsVerticalScrollIndicator={false}>
   <View  style={{flexDirection:"row", width:"100%", alignItems:"center" , justifyContent:"center" , flexWrap:"wrap" , gap:10 , marginTop:20}}>
                {/* <View style={styles.box}>
<Text style={styles.title}>Summery1</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>
</View> 
<View style={{...styles.box}}>
<Text style={styles.title}>Summery2</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit facere eos quibusdam tempora recusandae pariatur aperiam ipsa. Provident tempora facilis assumenda neque autem officia quos quas, laborum, obcaecati amet dolorum!</Text>

        </View> */}

  <FlatList
      data={MyData}
      renderItem={({item}) => (
        <TouchableOpacity onPress={() => {
          navigate("props" , {item})
        }} style={{...styles.box , backgroundColor:item.background || "#cbececff"}}>
<Text style={{fontSize:20 , fontWeight:600 ,}}>{item.title}</Text>
<Text style={{marginTop:10 , fontFamily:"Lexend-500"}} numberOfLines={7} ellipsizeMode="tail">
   <RenderHtml
        contentWidth={width}
        source={{ html: limitHtmlParagraphs(item.Data, 2) }}
      />
</Text>

        </TouchableOpacity>
      )}
      numColumns={2}
  keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{flexDirection:"row" , width:"100%" , flexWrap:"wrap" , alignItems:"center" , justifyContent:"center" , gap:10 , marginTop:20}}
   refreshing={refreshing}
   onRefresh={onRefresh}
   scrollEnabled={false}
   />
   
   </View>


    </ScrollView>
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
    badges:{paddingHorizontal:25 , marginHorizontal:5 , paddingVertical:7 ,backgroundColor:"#ebeaeaff" , borderRadius:9999 , fontWeight:300 , fontFamily:"Lexend-600" , fontSize:18},
box:{ width: Dimensions.get('window').width / 2, marginLeft:15 ,  overflow:"hidden", backgroundColor:"#cbececff" , height:"auto" , borderRadius:10 , padding:25 , marginTop:20},
})