import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList,ScrollView } from 'react-native';
import ProductCard from '../../components/cards/product';
import { fetchCategory } from '../../helpers/fetch';
const CategoryDetails=({route})=>{
    const navigation=useNavigation()
   const [list,setlist]=useState([])
   const {category} =route.params
   useEffect(()=>{
    (async()=>{
        const res= await fetchCategory(category)
        setlist(res)
    })()
     let map={
        fruits:'Fruits & Vegetables',
        eggs:'Diary & Eggs',
        meat:'Meat & Fish',
        bakery:'Bakery& Snacks',
        beverages:'Beverages'
    }
    navigation.setOptions({title:map[category]})
   },[])
    return(
      !list?null:  <ScrollView style={{paddingTop:50,flex:1,backgroundColor:'#ffffff'}}
                horizontal
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    width:'100%',
                    flexDirection: 'row',
                    // flexWrap: 'wrap',
                }}>
            <FlatList
                data={list}
               renderItem={({item})=><ProductCard product={item}  />}
               keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
              />
        </ScrollView>
    )
}
export default CategoryDetails;