import React, { useEffect,useState } from 'react';
import {View,Text, StyleSheet, Pressable} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'



const QuantitySelector=({maxQuantity,quantity,setQuantity,setTotal,price,index})=>{
    const [color,setColor]=useState('#13599c')
   
   
    const onPlus=()=>{
        setQuantity((q)=>Math.min(maxQuantity,q+1))
        setTotal(t=>t+price)
    }
    const onMinus=()=>{
        setQuantity((q)=>Math.max(1,q-1) )
        setTotal(t=>t-price)
    }
    return(
    <View style={styles.optionContainer}>
       <Pressable style={styles.Pressable} onPress={quantity===1?null:onMinus}>
            <Icon name="minus" size={25} color={quantity===1?'#c7d0d9':'green'} />       
        </Pressable > 
        <Text style={styles.text}>{quantity}</Text>
        <Pressable style={styles.Pressable} onPress={quantity==maxQuantity?null:onPlus}  >
            <Icon name='plus' size={25} color={quantity===maxQuantity?'#c7d0d9':'green'}/>
        </Pressable>
           
    </View>

    )
}
export default QuantitySelector;
const styles=StyleSheet.create({
    optionContainer:{
        flexDirection:'row',
        alignItems:"center",
        borderRadius:5,
        color:"red",
        //marginBottom:3,
      // backgroundColor:'#d1d1d1',
    },
    Pressable:{
        height:35,
        width:35,
        alignItems:'center',
        justifyContent:'center',
        // backgroundColor:'#e6e8eb',
        borderRadius:10,
        borderWidth:1,
        borderColor:'#dcdedc'
        
    },
    text:{
        //color:'red',
        fontWeight:"bold",
        fontSize:20,
        marginHorizontal:15,
    }

})