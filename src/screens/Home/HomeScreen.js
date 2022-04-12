import React, { useState } from "react";
import {View,ScrollView, FlatList,KeyboardAvoidingView,Platform} from 'react-native';
import CategoryScreen from "./category";
import SearchHeader from "../../components/searchHeader";
import MyCarousel from "../../components/snapCarousel";
import LogoLocation from "../../components/logo";

const HomeScreen=()=>{
    let [list,setList]=useState([])
    let categories=['fruits','beverages','bakery','meat','eggs']
    const [search,setSearch]=useState('') 
    // useEffect(()=>{
        
    // },[])
    //console.log(list)
    return(
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
         style={{flex:1,backgroundColor:'white'}}>
            <LogoLocation/>
            <SearchHeader setSearch={setSearch} search={search} />
            <ScrollView>

            <MyCarousel/>
            {
                categories.map((item,index)=>(
                <CategoryScreen category={item} key={index} search={search}/>
                ))
                
            }
                
            
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default HomeScreen