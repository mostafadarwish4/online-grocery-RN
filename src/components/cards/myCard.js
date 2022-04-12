import React, { useEffect, useState } from 'react';
import { View,Image,Text, Pressable,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import QuantitySelector from '../quantitySelector';
import {deleteProduct} from '../../store/userProducts/actions'

const MyCard=({product,setTotal,index})=>{
     useEffect(()=>{
        index===0?setTotal(price):setTotal(t=>(t+price))
    },[])
    const [quantity,setQuantity]=useState(1)
    const token=useSelector(state=>state.token)
    const dispatch=useDispatch()
    const {title,price,weight,image}=product
    
    return (
        <View style={styles.root}>
            <Image style={styles.img} source={{uri:image}}/>
            <View style={styles.mid}>
                <View style={styles.textContainer}>
                <Text  style={styles.title}>{title}</Text>
                <Text style={{fontSize:15,color:'grey'}}>{weight||'180g'}, Price</Text>
                </View>
                <View style={{flex:.5,}}>
                  <QuantitySelector quantity={quantity} 
                    setQuantity={setQuantity}
                    index={index} 
                    maxQuantity={7}
                    setTotal={setTotal}
                    price={price}
                    />  
                </View>
                


            </View>
            <View style={styles.right}>
                <Pressable style={styles.del}
                    onPress={()=>{
                        dispatch(deleteProduct('products',product,token))
                        setTotal(t=>t-quantity*price)
                    }}
                    >
                    <Feather name='x' size={30} color='#ababab' />
                </Pressable>
                <View style={styles.priceContainer}>
                    <Text  style={styles.price}>${price}</Text>
                </View>
                
            </View>
        </View>
    )
}

export default MyCard;

const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:5,
        borderBottomWidth:1,
        borderColor:'#d2d4d2',
        minHeight:150,
        backgroundColor:'#ffffff'
    },
    img:{
        flex:.4,
        height:100,
        resizeMode:'contain',
        margin:5,
        alignSelf:'center'
    },
    mid:{flex:.4},
    textContainer:{flex:.5,margin:5},
    title:{fontSize:18,fontWeight:'bold'},
    pressable:{
        
        backgroundColor:'#dbdbdb',
        borderWidth:1,
        borderRadius:15,
        borderColor:'white'
    },
    right:{
        flex:.2,
        margin:5,
    },
    del:{
        flex:.5,
        alignItems:'flex-end'
        
    },
    priceContainer:{
        flex:.5,
        alignItems:'flex-end',
        justifyContent:'center'
    },
    price:{
        fontSize:20,
        fontWeight:'bold',
        
},
})