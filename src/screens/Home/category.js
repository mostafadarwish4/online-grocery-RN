import React, { useEffect, useState } from "react";
import {Text,View, FlatList, Pressable,StyleSheet} from 'react-native';
import ProductCard from "../../components/cards/product";
import { useNavigation } from "@react-navigation/native";
import { fetchCategory } from "../../helpers/fetch";
import { map } from "../../helpers/objects";
const CategoryScreen=({category,search})=>{
    
    let [list,setList]=useState([])
    const navigation=useNavigation()
    const length=list.filter(product=>(product.title.toLowerCase().match(new RegExp(search.toLowerCase())))).length
    
    useEffect(()=>{
        (async()=>{
            const res=await fetchCategory(category,5)
            setList(res)
        })()
    },[])
    
    return(
       length>0&& <View style={styles.root}>
            <View style={styles.sub}>
                <Text style={{fontSize:20,fontWeight:'bold',}}>{map[category]}:</Text>
                <Pressable onPress={()=>{
                    navigation.navigate('2',{category})
                }} style={styles.pressable}>
                    <Text style={styles.text}>See all</Text>
                </Pressable>
            </View>
            
                <FlatList
                    style={{flex:1,minWidth:'100%'}}
                    horizontal
                    data={list.filter(product=>(product.title.toLowerCase().match(new RegExp(search.toLowerCase()))))}
                    renderItem={({item})=>{
                        
                         return (<ProductCard s product={item} />)
                }
                    }
                    keyExtractor={item => item.id}
                    showsHorizontalScrollIndicator={false}
                    
                />
        </View>
    )
}

export default CategoryScreen
const styles=StyleSheet.create({
    root:{flex:1,borderBottomWidth:1,borderBottomColor:'#dbdbdb'},
    sub:{flexDirection:'row',margin:10,alignItems:'center'},
    pressable:{
        position:'absolute',
        right:4
    },
    text:{fontSize:17,
                    fontWeight:'bold',
                    color:'#0a5c33',
                    
                    }
})