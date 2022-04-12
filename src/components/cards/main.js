import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View,Image,Text, Pressable,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

const MainCard=({cat,title,image,color})=>{
    const navigation =useNavigation()
    const nav=()=>{navigation.navigate('category',{category:cat})}
    return (
        <Pressable onPress={nav} style={[styles.root,{backgroundColor:color}]}>
            <Image style={styles.img} source={image?{uri:image}:require('../../images/icons8-fruits-and-vegetables-64.png')}
             defaultSource={require('../../images/fruit.png')} />
            <Pressable style={styles.textContainer}>
            <Text  style={styles.head}>{title}</Text>
            </Pressable>
        </Pressable>
    )
}
// https://thumbs.dreamstime.com/b/vegetable-bag-pink-background-space-copy-187994035.jpg
export default MainCard;
const styles=StyleSheet.create({
    root:{
        
        height:200,
        width:'45%',
        //backgroundColor:'#dbbadb',
        borderRadius:15,
        borderWidth:2,
        borderColor:'#cfcfcf',
        margin:10
    },
    img:{
        flex:.7,
        height:'100%',
        width:'100%',
        resizeMode:'cover',
        alignSelf:'center',
        borderRadius:13,
    },
    textContainer:{flex:.3,marginHorizontal:10,marginVertical:5},
    head:{fontSize:18,fontWeight:'bold',color:'white'},
    
    
})

// <ScrollView
//               horizontal
//               showsVerticalScrollIndicator={false}
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={{
//                 maxWidth:'100%',
//                 flexDirection: 'row',
//                 // flexWrap: 'wrap',
//               }}>
//               <FlatList
//                 data={[0,1,3,2]}
//                 renderItem={MainCard}
//                 keyExtractor={item => `${item}`}
//                 showsHorizontalScrollIndicator={false}
//                 numColumns={2}
//               />
//             </ScrollView>