import React, { useContext, useEffect, useState } from 'react'
import {View,Text,TouchableOpacity,StyleSheet, TouchableHighlight, Pressable, ActivityIndicator} from 'react-native'
import {Input} from 'react-native-elements'
import Spacer from '../../components/spacer'
import Button from '../../components/Btn'
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch, useSelector } from 'react-redux'
import { login, register } from '../../store/auth/actions'
import { useNavigation } from '@react-navigation/native'
import { clearErrorMessage } from '../../store/error/error'

const AuthForm=({text,title,l})=>{
    const [email,setEmail]=useState('')
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
    const [check,setCheck] =useState(true)
    const [spin,setSpin]=useState(false)
    const error=useSelector(state=>state.error)
    const user=useSelector(state=>state.user)
    const navigation=useNavigation();
    //const [first,second]=navigationText.split('?')
    const dispatch=useDispatch()
    const triggerSpin=()=>{
        setSpin(true)
       setTimeout(() => {
           setSpin(false)
       }, 2000);
    }
   const signin=()=>{
       dispatch(login(email,password))
       dispatch(clearErrorMessage())
       triggerSpin()
   }
   const signup=async ()=>{
       dispatch(register(name,email,password))
       dispatch(clearErrorMessage())
        triggerSpin()
   }
   //console.log(user,'auth')
   useEffect(()=>{
       
      if(user&&!l)navigation.navigate('location')
   },[user])
    return (
            <View style={styles.main}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.h2}>{text} </Text>            
        
                {l?null:<Input placeholder='name'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setName}
                    value={name}
                    onFocus={()=>{
                        dispatch(clearErrorMessage())
                        }}
                />}
                <Input placeholder='Email'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    onChangeText={setEmail}
                    value={email}
                    onFocus={()=>{
                        dispatch(clearErrorMessage())
                        }}
                />
               
                <Input placeholder='Password'
                    style={styles.input}
                    autoCapitalize='none'
                    autoCorrect={false}
                    secureTextEntry={check}
                    rightIcon={<Pressable  onPress={()=>{setCheck(x=>!x)}}><Feather size={25} name={check?'eye-off':'eye'}  /></Pressable>}
                    onChangeText={setPassword}
                    value={password} 
                    onFocus={()=>{
                        dispatch(clearErrorMessage())
                        }}
                />

                {/* </Input> */}
                
                {l&&(<Pressable style={{alignItems:'flex-end',marginRight:10}}>
                        <Text style={{fontSize:18}}>Forgot password?</Text>
                    </Pressable>)}
                <Spacer/>
                {error?(<Text style={{fontSize:18,color:'red'}}>⚠️ {error}</Text>):null}
                <Spacer />
               {spin?<ActivityIndicator size={50} style={{alignSelf:'center'}} />: <Button title={l?'Login':'Sign up'}
                    onclick={l?signin:signup} 
                />}
                    {/* <Text style={styles.alert} >{first}?</Text> */}

        </View>
    )
}
const styles=StyleSheet.create({
    
    main:{
        marginHorizontal:10,
        justifyContent:'space-between'
    },
    title:{
        fontWeight:'bold',
        fontSize:24,
        marginLeft:10
    },
    h2:{
        color:'#707070',
        fontSize:18,
        margin:10
    },
    input:{
        width:'90%',
        height:10,
    },
    errMessage:{
        color:'red',
        fontSize:15,
        marginLeft:10,
        marginBottom:5
    },
    alert:{
        color:'gray',
        alignSelf:'center',
        paddingTop:20,
        fontSize:18
    },
    navText:{
        margin:10,
        padding:8,
        
        color:'#295a91',    
        alignSelf:'center',
        fontSize:18
    },
    
   
})
export default AuthForm