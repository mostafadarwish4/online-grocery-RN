import React,{useState} from "react";
import { View,StyleSheet,Text,Pressable, ActivityIndicator } from "react-native";
import Butn from "../../components/Btn";
import Cursol from "../../components/imageCoursol";
import QuantitySelector from "../../components/quantitySelector";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import styles from './styles'
import Descripion from "./description";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct } from "../../store/userProducts/actions";

const DetailsScreen=({route})=>{
    const {product}=route.params
    const [quantity,setQuantity]=useState(1)
    const dispatch=useDispatch()
    const {fav,products}=useSelector(state=>state.user);
    const token =useSelector(state=>state.token)
    const onFav=(fav.filter(pro=>pro.id===product.id).length>0)
    const onCart=(products.filter(doc=>doc.id===product.id).length>0)
    const [spin,setSpin]=useState(false)
    const clickFav=()=>{
        onFav?dispatch(deleteProduct('fav',product,token)):dispatch(addProduct('fav',product,token))
        setSpin(true)
        setTimeout(() => {
            setSpin(false)
        }, 3000);
    }
    const clickAdd=()=>{
        dispatch(addProduct('products',product,token))
    }
    return (
        <View style={{flex:1,}}>
           <View style={{height:300}}>
                <Cursol />
            </View> 
            
            {/* move */}
            <View style={styles.move}>
                <View style={styles.mid}>
                    <View style={styles.textContainer}>
                        <Text  style={styles.title}>{product.title}</Text>
                        <Text style={{fontSize:15,color:'grey'}}>{product.weight}, Price</Text>
                    </View>
                    <View style={{flex:.5,justifyContent:'center',margin:5}}>
                        <QuantitySelector quantity={quantity} 
                            setQuantity={setQuantity}
                            index={0} 
                            maxQuantity={7}
                            setTotal={()=>{}}
                            price={product.price}
                            />  
                    </View>
                
                </View>
                <View style={styles.right}>
                   {spin?<ActivityIndicator size={30} style={styles.fav} />:
                   <Pressable style={styles.fav} onPress={clickFav}>
                        <MaterialIcons name={onFav?'favorite':'favorite-outline'} size={40} color={onFav?'red':'grey'} />
                    </Pressable>}
                    <View style={styles.priceContainer}>
                        <Text  style={styles.price}>${product.price}</Text>
                    </View>
                    
                </View>
            </View>
            {/* description */}
            <Descripion/>
            {/* review */}
            <View style={styles.review }>
                <Text style={[styles.title,{flex:.5}]}>Review</Text>
                <View style={styles.stars}>
                {
                    [0,0,0,0,0].map((data,index)=>(
                        <FontAwesome
                        key={`${index}`}
                        name={index < Math.floor(4.5) ? 'star' : 'star-o'}
                        size={30}
                        color={'#e47911'}
                    />
                        ))
                }
                <Feather name='chevron-right' size={30} />
            </View>
            </View>
            <View style={styles.btn}>
               { onCart?
               <Text style={styles.exist}>This item is on your Basket right now</Text>:
               <Butn  title={'Add To Basket'} onclick={clickAdd}/>}
            </View>
        </View>
    )
}
export default DetailsScreen;

