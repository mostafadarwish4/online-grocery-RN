import React from "react";
import {Text,TextInput,View,StyleSheet, ImageBackground, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Button from '../../components/Btn'
const Cover=()=>{
    return(
        <ImageBackground source={{uri:'https://previews.123rf.com/images/anaumenko/anaumenko1802/anaumenko180200079/95143768-concetto-di-spesa-concetto-di-dieta-equilibrata-alimenti-freschi-con-il-sacchetto-della-spesa-su-fon.jpg'}}
         resizeMode='cover'
         style={styles.root}
         >
            <FontAwesome name='carrot' color='white' size={60} />
                 <View style={{marginHorizontal:5}}>
                    <Text style={styles.head}>Factos</Text> 
                    <Text style={styles.text}>online groceries</Text> 
                </View>
            <Button />

        </ImageBackground>
    )
}

export default Cover
const styles=StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#6bcf86',
        //flexDirection:'row',
        alignItems:'center',
        //justifyContent:'center'
    },
    head:{color:'white',fontWeight:'500',fontSize:50},
    text:{color:'white',fontSize:20}
    
})