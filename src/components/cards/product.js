import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View,Image,Text, Pressable,StyleSheet,useWindowDimensions,ActivityIndicator } from 'react-native';
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux';
import { addProduct } from '../../store/userProducts/actions';

const ProductCard=({product,s})=>{
    const windowWidth=useWindowDimensions().width 
    const token=useSelector(state=>state.token)
    const {products}=useSelector(state=>state.user)
    const exist=products.filter(p=>p.id===product.id).length>0
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const {title,image,price, weight}=product
    const [spin,setSpin]=useState(false)
    return (
        <View style={[styles.root,{width:s?windowWidth/2:'45%'}]}>
            <Image style={styles.img} source={{uri:image}}
            defaultSource={require('../../images/bana.jpg')}/>
            <Pressable style={styles.textContainer}
                onPress={()=>{
                    navigation.navigate('3',{product})
                }}
            >
                <Text  style={styles.head}>{title}</Text>
                <Text style={styles.text}>{weight||'250g'}, Price</Text>
            </Pressable>
            <View style={styles.footer}>
                <Text style={styles.price}>${price}</Text>
                {spin?<ActivityIndicator style={styles.pressable} size={20}/>:<Pressable style={[styles.pressable,{backgroundColor:exist?'#aeb5af':'#3f8a4e'}]}
                    onPress={()=>{
                       if(!exist){ 
                            dispatch(addProduct('products',product,token))
                            setSpin(true)
                            setTimeout(() => {
                                setSpin(false)
                            }, 4000);
                    }
                    }}
                >
                    <Feather name={exist?'check':'plus'} size={35} color='white' />
                </Pressable>}
            </View>
        </View>
    )
}

export default ProductCard;
const styles=StyleSheet.create({
    root:{
        
        height:250,
        width:'45%',
        backgroundColor:'white',
        borderRadius:15,
        borderWidth:2,
        borderColor:'#e6e6e6',
        margin:10
    },
    img:{
        flex:.6,
        height:100,
        width:'100%',
        resizeMode:'contain',
        padding:5,
        alignSelf:'center',
        borderRadius:15,
    },
    textContainer:{flex:.2,marginHorizontal:10,marginVertical:5},
    head:{fontSize:18,fontWeight:'bold'},
    text:{color:'grey',},
    footer:{flex:.2,margin:10,flexDirection:'row',alignItems:'center'},
    price:{fontSize:16,fontWeight:'bold'},
    pressable:{
        position:'absolute',
        right:2,
        backgroundColor:'#3f8a4e',
        borderWidth:1,
        borderRadius:15,
        padding:5,
        borderColor:'white'
    },
})