import React from "react";
import {Text,View, TouchableOpacity,StyleSheet} from 'react-native';

const Butn=({onclick,title, price})=>{
   
    return(
        <TouchableOpacity style={styles.button} onPress={onclick}>
                <Text style={styles.text}>{title}</Text>
                {price!==undefined&&
                <View style={styles.priceContainer}>
                     <Text style={styles.price}>${price}</Text>
                </View>
               }
            </TouchableOpacity>
    )
}
const styles=StyleSheet.create({
    button:{
        marginBottom:10,
        borderRadius:15,
        backgroundColor:'#28994a',
        height:60,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:'row',
        margin:10,
        width:'95%',
        alignSelf:'center',
        
    },
    text:{
        fontSize:20,
        fontWeight:'500',
        color:'#ffffff'
    },priceContainer:{
        position:'absolute',
        right:30,
        backgroundColor:'#147843',
        borderRadius:10,
        padding:10
    },
    price:{
        color:'white',
        fontSize:18,
        fontWeight:'bold'
    },

})
export default Butn;