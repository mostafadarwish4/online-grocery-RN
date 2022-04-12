import React, { useState } from 'react';
import {FlatList, ScrollView,Text, View} from 'react-native'
import {useSelector} from 'react-redux'
import Butn from '../../components/Btn';
import MyCard from '../../components/cards/myCard';
import EmptyList from '../../components/EmptyList';
const MyCartScreen=()=>{
    const {products}=useSelector(state=>state.user)
    const [total,setTotal]=useState(0)
    
    return (
        <View style={{flex:1}}>
            {/* <Text style={{alignSelf:'center',marginHorizontal:20}}>{total.toFixed(2)}</Text>     */}
           { products.length>0? <>
            <View style={{alignSelf:'center',width:'100%'}}>
                 <Butn title={'Check out'} price={total} />
             </View>
             <FlatList
                data={products}
                keyExtractor={(iem,index)=>'key'+index}
                renderItem={({item,index})=>(
                <MyCard 
                     index={index}
                     setTotal={setTotal}
                     product={item}/>)}
                     
                     />
           </>:<EmptyList/>}
         </View>
    )
}
export default MyCartScreen;