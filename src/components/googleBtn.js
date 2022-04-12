import React from "react";
import {Text, StyleSheet, Pressable} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {GoogleSignin,} from '@react-native-google-signin/google-signin';
import { googleLogin, googleSignup } from "../store/auth/actions";
import {useDispatch} from 'react-redux'
const GoogleButton=({l})=>{
    GoogleSignin.configure({
    webClientId:'1000572380976-4ap5tqm0p1rd9lt1031p4j3r8b5ffp0c.apps.googleusercontent.com',
  });
  const dispatch=useDispatch()
 const login=()=>{
     dispatch(l?googleLogin():googleSignup())
 }
    return(
        <Pressable style={styles.button} onPress={login}>
                <FontAwesome style={{position:'absolute',left:10}} name='google' size={30} color='#ffffff'/>
                <Text style={styles.text}>Continue With Google</Text>
        </Pressable>
    )
}
const styles=StyleSheet.create({
    button:{
        borderRadius:15,
        backgroundColor:'#2270a1',
        height:60,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        margin:10,
        width:'90%',
        alignSelf:'center'
    },
    text:{
        fontSize:20,
        fontWeight:'500',
        color:'#ffffff',
        alignSelf:'center'
    }

})
export default GoogleButton;