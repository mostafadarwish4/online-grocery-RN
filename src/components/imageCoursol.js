import React, { useState } from 'react';
import {StyleSheet,Text,View, ImageBackground, Pressable} from 'react-native';
import Feather from 'react-native-vector-icons/Feather'

 const Cursol=()=>{
     const [index,setIndx]=useState(0)
let arr=['https://img.freepik.com/free-psd/vegetable-grocery-delivery-promotion-web-banner-facebook-cover-instagram-template_502896-109.jpg',
                        'https://i.pinimg.com/736x/0f/f6/ff/0ff6ff3499a81f32befcab02c9c5ce98.jpg',
                        'https://thumbs.dreamstime.com/z/shopping-paper-different-groceries-light-blue-wooden-background-flat-lay-space-text-shopping-paper-bag-different-156220128.jpg',
                    ]
    return (
            <ImageBackground 
                style={styles.img}
                resizeMode='cover'
                imageStyle={{borderBottomRightRadius:20,borderBottomLeftRadius:20}}
                source={{uri:arr[index]}} >
                    {index>0&&(<Pressable
                        onPress={()=>{
                        index===0?null:setIndx(x=>x-1)
                    }}
                    style={styles.left}>
                       <Feather size={30} name='chevron-left'/>

                    </Pressable>)}
                    {index<2&&(<Pressable onPress={()=>{
                        index===2?null:setIndx(x=>x+1)
                    }} style={styles.right}>
                        <Feather size={30} name='chevron-right'/>

                    </Pressable>)}
            </ImageBackground>
       
    )
 }
 export default Cursol;

 const styles=StyleSheet.create({
     img:{
        height:300,
        width:'100%',
        justifyContent:'center',
    },
     left:{
        position:'absolute',
        left:5,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#cccfcd',
        height:40,
        width:40,
        borderRadius:40,
    },
     right:{
        position:'absolute',
        right:5,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#cccfcd',
        height:40,
        width:40,
        borderRadius:40,

    },
    icon:{
        fontSize:30,
        color:'green',
        fontWeight:'bold'
    }
 })