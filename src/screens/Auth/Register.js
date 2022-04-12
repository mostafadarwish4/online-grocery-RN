import React, { useEffect } from "react";
import {Text,TextInput,Image,View,Pressable, TouchableHighlight} from 'react-native';

import AuthForm from "./AuthForm";
import Spacer from "../../components/spacer";
import GoogleButton from "../../components/googleBtn";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { clearErrorMessage } from "../../store/error/error";

const RegisterScreen=()=>{
    const navigation=useNavigation();
    const error=useSelector(state=>state.error)
    const dispatch=useDispatch()
    useEffect(()=>{
      navigation.addListener('focus',()=>{dispatch(clearErrorMessage())})
      navigation.addListener('blur',()=>{dispatch(clearErrorMessage())})
    },[])
    return(
        <View style={{
          flex:1,
          width:'100%',
        }}>
          <Image style={{flex:.25,width:'100%',minHeight:200}} 
          source={{uri:'https://previews.123rf.com/images/anaumenko/anaumenko1802/anaumenko180200079/95143768-concetto-di-spesa-concetto-di-dieta-equilibrata-alimenti-freschi-con-il-sacchetto-della-spesa-su-fon.jpg'}} />
          <View style={{
         
        }}>
            <Spacer s={5}/>
              <AuthForm  title='Sign up' text='Enter your credentials to continue'

              /> 
              <Text style={{fontWeight:'700',alignSelf:'center'}}>OR</Text>     
            
              <GoogleButton />
              <View style={{flexDirection:'row',alignSelf:"center"}}>

              <Text style={{fontSize:20,fontWeight:'bold'}}>Don't have an account? </Text>
              <Pressable onPress={()=>{
                navigation.navigate('login')
              }}>
               <Text style={{color:'#2b9445',fontSize:20,fontWeight:'bold'}}>Login</Text>

              </Pressable>
              </View>
              
          </View>
         
</View>
    )
}

export default RegisterScreen;