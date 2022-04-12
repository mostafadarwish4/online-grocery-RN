import React, {useEffect, useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import Home from "./home";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from "./auth";
import { useDispatch, useSelector } from "react-redux";
import { persistLogin, signOut } from "../store/auth/actions";
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import Start from "../screens/cover/start";

const Stack=createNativeStackNavigator()
export default ()=>{
    const dispatch=useDispatch()
    const token=useSelector(state=>state.token)
    const [change,exchange]=useState(true)

    useEffect(() => {
        dispatch(persistLogin() )
        setTimeout(() => {
            exchange(false)
        }, 200);
       
      //dispatch(signOut)
       GoogleSignin.configure({
    webClientId:'Your web client id',
  });
    }, []);

    return (
        change?<Start/>:
        <NavigationContainer>
            <Stack.Navigator >
                {token?
                <Stack.Screen options={{headerShown:false}} name="Main"
                component={Home} />:
                <Stack.Screen options={{headerShown:false}} name="Auth"
                component={Auth} />}
            </Stack.Navigator>
        </NavigationContainer>
    
      
  );
  }