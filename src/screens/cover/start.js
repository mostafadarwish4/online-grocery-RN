import React from "react";
import {Text,TextInput,StyleSheet,View,Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
const Start=()=>{
    return(
        <View style={styles.root}>
            <FontAwesome name='carrot' color='white' size={60} />
                 <View style={{marginHorizontal:5}}>
                    <Text style={styles.head}>Factos</Text> 
                    <Text style={styles.text}>online groceries</Text> 
                </View>
            

        </View>
    )
}

export default Start
const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#6bcf86',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    head:{color:'white',fontWeight:'500',fontSize:50},
    text:{color:'white',fontSize:20}
    
})