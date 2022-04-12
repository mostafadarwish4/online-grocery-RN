import React from 'react'
import {View,Text,Image, StyleSheet}from 'react-native'

const EmptyList=()=>{
    
    
    return (
        <View style={styles.root}>
            <Image style={styles.image} source={require('../images/empte.png')}/>
            
        </View>
    )
}
const styles=StyleSheet.create({
    root:{
        flex:1,
        alignItems:'center',
        backgroundColor:'white'
    },
    image:{
        //flex:1,
         height:'100%',
         width:'100%',
        resizeMode:'contain'
        
    },
    text:{
    fontSize:20,
    maxWidth:'90%',
    fontWeight:'bold',
    padding:10,
    
    },
    text2:{
    fontSize:20,
    // alignSelf:'center',
    maxWidth:'80%',
    color:'grey'
    }
})
export default EmptyList;