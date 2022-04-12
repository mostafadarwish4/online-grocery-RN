import React from "react";
import {Text,TextInput,View,StyleSheet, Image, TouchableOpacity, SafeAreaView, ActivityIndicator} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import { useSelector } from "react-redux";
import Entypo from 'react-native-vector-icons/Entypo'
const LogoLocation=()=>{
    const user=useSelector(state=>state.user)
    console.log(user,'as')
    return(
     user!==[]?<View 
         style={styles.root}
         >
             
                <FontAwesome name='carrot' color='green' size={40} />
                
                 <View style={{marginHorizontal:5,flexDirection:'row'}}>
                    <Entypo name='location-pin' size={30} />
                    <Text style={styles.text}>{user?.location?.area}, {user?.location?.city}</Text> 
                </View>

        </View>:<ActivityIndicator size={30} style={{alignSelf:'center'}}/>
    )
}
export default LogoLocation;

const styles=StyleSheet.create({
    root:{
        margin:10,
        alignItems:'center',
    },
    head:{fontWeight:'500',fontSize:50},
    text:{fontSize:20,marginLeft:10}
    
})