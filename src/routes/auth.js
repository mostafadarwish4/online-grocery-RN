import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/Auth/Login'
import RegisterScreen from '../screens/Auth/Register'
import LocationScreen from '../screens/location/location'
import { useSelector } from 'react-redux'

const Stack=createNativeStackNavigator()
const Auth=()=>{
    const user=useSelector(state=>state.user)
    return (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='login' component={LoginScreen} />
            <Stack.Screen name='register' component={RegisterScreen} />
            <Stack.Screen name='location' component={LocationScreen}/>
        </Stack.Navigator>
    )
}

export default Auth