import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View,Image,Text, Pressable,StyleSheet } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';

const FavCard=({product})=>{
    const navigation = useNavigation()
    const {title,price,weight,image}=product
    return (
        <View style={styles.root}>
            <Image style={styles.img}
            source={image?{uri:image}:require('../../images/coca.jpg')}
            />
            <View style={styles.mid}>
                
                <Text  style={styles.title}>{title||'Fresh Fruits'}</Text>
                <Text style={{fontSize:15,color:'grey'}}>{weight||'180g'}, Price</Text>
               
            </View>
            <View style={styles.right}>
                <Text  style={styles.price}>${price||'4.5'}</Text>
                <Pressable style={styles.fav}
                    onPress={()=>{
                       navigation.navigate('detail',{product}) 
                    }}
                    >
                    <Feather name='chevron-right' size={30}  />
                </Pressable>
            </View>
        </View>
    )
}

export default FavCard;

const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        padding:5,
        borderBottomWidth:1,
        borderColor:'#d2d4d2',
        maxHeight:150,
        backgroundColor:'#ffffff'
    },
    img:{
        flex:.3,
        height:90,
        resizeMode:'contain',
        marginVertical:5,
        alignSelf:'center'
    },
    mid:{flex:.5,justifyContent:'center'},
    title:{fontSize:18,fontWeight:'bold'},
    pressable:{
        
        backgroundColor:'#dbdbdb',
        borderWidth:1,
        borderRadius:15,
        borderColor:'white'
    },
    right:{
        flex:.2,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
        position:'absolute',
        right:5
    },
    fav:{
        flex:1,
        marginLeft:5,
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