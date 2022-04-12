import React, { useState } from 'react';
import {ActivityIndicator, FlatList, ScrollView, View} from 'react-native'
import {useDispatch, useSelector} from 'react-redux'
import Butn from '../../components/Btn';
import FavCard from '../../components/cards/fav';
import EmptyList from '../../components/EmptyList';
import { addBatch } from '../../store/userProducts/actions';

const FavScreen=()=>{
    const user=useSelector(state=>state.user)
    //console.log(user)
    const dispatch=useDispatch()
    const [wait,setWait]=useState(false)
    const toBasket=()=>{
        dispatch(addBatch(user.fav,user.id))
        setWait(true)
        setTimeout(() => {
            setWait(false)
        }, 2000);
    }
    return (
        <View style={{flex:1}}>    
            {user.fav.length>0?
            <>
            <ScrollView>
               { user.fav.map((item)=><FavCard key={item+Math.random()} product={item}/>)}
            </ScrollView>
            <View style={{position:'absolute',bottom:10,alignSelf:'center',width:'100%'}}>
             { wait? <ActivityIndicator size={30} style={{alignSelf:'center'}} />: <Butn title={'Add All To Basket'} onclick={toBasket} />}
            </View>
            </>:<EmptyList/>}
        </View>
    )
}
export default FavScreen;