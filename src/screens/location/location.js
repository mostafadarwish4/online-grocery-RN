import React,{useState} from 'react';
import {View,Image,Text,ScrollView, TextInput, Alert} from 'react-native'
import { Picker } from '@react-native-picker/picker';
import styles from './styles';
import Button from '../../components/Btn';
import { useDispatch, useSelector } from 'react-redux';
import { updateLocation } from '../../store/auth/actions';
const LocationScreen=()=>{
    const cities=['Cairo','Giza','Alex']
    const [city,setCity]=useState('cairo')
    const [area,setArea]=useState('')
    const user=useSelector(state=>state.user)
    //console.log('olo',user)
    const dispatch=useDispatch()
    const submitLocation=()=>{
        if(city&&area) return dispatch(updateLocation({city,area},user.id))
        Alert('Please fill Blancks')
    }
return(
        <ScrollView style={{flex:1}} >
            <View style={styles.root}>
                <Image style={styles.image}
                    source={{uri:'https://www.xda-developers.com/files/2017/04/Many-of-the-Top-100000-Android-Applications-are-Selling-Your-GPS-Location-Data-e1627558218326-1024x667.png'}}
                    defaultSource={require('../../images/address-verification-service-500x500.png')}/>
                <Text style={styles.head}>Select Your Location</Text>
                <Text style={styles.text}>Switch on your location to still in tune with </Text>
                <Text style={styles.text}>what's happing in your location </Text>
                <View style={styles.pickerConteiner}>
                    <Text style={styles.picText}>Your city</Text>
                    <Picker 
                        selectedValue={city}
                            onValueChange={((value)=>{
                                setCity(value)
                            })}
                            mode={'dropdown'}
                            dropdownIconColor='gray'
                            dropdownIconRippleColor='green'
                            //prompt={'zone'}
                            
                    >
                        {
                        cities.map((city,i)=><Picker.Item style={{fontSize:18}}
                            value={city} 
                            label={city} 
                            key={i}/>)
                        }
                    </Picker>
                </View>
                <View style={styles.pickerConteiner}>
                    <Text style={styles.picText}>Your area</Text>
                    <TextInput style={{width:'90%',height:50,color:'#000000',fontSize:18}} 
                        value={area}
                        onChangeText={setArea}
                        underlineColorAndroid='white'
                    />
                </View>
                <Button title='Submit your location' onclick={submitLocation} />
            </View>
            
        </ScrollView>
            )
}

export default LocationScreen;