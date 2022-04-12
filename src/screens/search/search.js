import React, { useEffect, useState } from "react";
import SearchHeader from "../../components/searchHeader";
import { View,Text,FlatList } from "react-native";
import MainCard from "../../components/cards/main";
import { data } from "../../helpers/objects";
import { fetchAll } from "../../helpers/fetch";
import ProductCard from "../../components/cards/product";
const SearchScreen=()=>{

    const [search,setSearch]=useState('')
    let [res,setRes]=useState([])
    useEffect(()=>{
        (async()=>{
            const result = await fetchAll();
            setRes(result)
        })()
    },[])
    return(
        <View style={{flex:1,mrgin:10}}>
           <SearchHeader search={search} setSearch={setSearch} />
           <Text style={{fontSize:20,margin:10,fontWeight:'bold'}}>All Categories</Text>
            {search?<FlatList
            data={res.filter(res=>res.title.toLowerCase().match(new RegExp(search.toLowerCase())))}
            renderItem={({item})=><ProductCard product={item} />}
            numColumns={2}
            keyExtractor={(item,index)=>index}
            />:
            <FlatList
                data={data}
               renderItem={({item})=><MainCard 
                    title={item.title}
                    color={item.color}
                    image={item.image}
                    cat={item.cat} 
                     />}
               keyExtractor={item => item.color}
                showsHorizontalScrollIndicator={false}
                numColumns={2}
              />}
        </View>
    )
}

export default SearchScreen;