import Head from '@/components/Head';
import React from 'react';
import { ScrollView, Text, useWindowDimensions } from 'react-native';
import RenderHtml from 'react-native-render-html';
import { SafeAreaView } from 'react-native-safe-area-context';
export default function Prope({route}) {


     const { width } = useWindowDimensions();
    
      function limitHtmlParagraphs(html:string, maxParagraphs = 3) {
      const matches = html.match(/<p[^>]*>.*?<\/p>/g); // يجيب كل الفقرات
      if (!matches) return html;
      return matches.slice(0, maxParagraphs).join('');
    }
    


  return (
    <SafeAreaView >
      <Head title='Summrey' />
      <ScrollView contentContainerStyle={{paddingHorizontal:10}}>
      <Text style={{fontSize:40 , fontFamily:"Lexend-700"}}>{route?.params.item.title}</Text>
      <Text style={{fontSize:16 , marginBottom:30 , color:"#525252ff" , fontFamily:"Lexend-500"}}>{route?.params.item.createdAt}</Text>
      <Text style={{fontSize:15 , lineHeight:22 , fontFamily:"Lexend-500"}}>

      <RenderHtml
              contentWidth={width}
              source={{ html: route?.params.item.Data }}
               tagsStyles={{
    p: { fontSize: 17 },
    h1: { fontWeight: 'bold' , fontSize:24 },
    b:{fontWeight:"bold"},
    li:{marginLeft:5},
    ol:{marginLeft:5},
    u:{textDecorationLine:"underline"},
    a:{textDecorationLine:"underline" , color:"blue"},
    i:{fontStyle:"italic"},
  }}
              />
              </Text>
      </ScrollView>
    </SafeAreaView>
  )
}


{/* <div>test</div><h1>6sst</h1><div style="text-align: center;">mk</div><div style="text-align: left;">ssx
    </div><div style="text-align: right;"><br></div><div style="text-align: right;">ssd</div>
    <div style="text-align: left;"><a href="https://jsisus">jsisus</a></div><div style="text-align: left;"><br>
    </div><div style="text-align: left;"><ul><li>sxs</li><li>sxz</li></ul><div><ol><li>ass</li><li>ass</li>
    <li><u>ssds</u>
</li><li><u><i>sdsd</i></u></li><li><u>
    <i><b>ssads</b></i></u></li></ol></div></div> */}