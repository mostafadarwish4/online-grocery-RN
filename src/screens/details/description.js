import React, { useState } from 'react';
import { View,Text,Pressable } from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather'

const Descripion=()=>{
    const [des,setdes]=useState(true)
    return(
        <View style={styles.descContainer}>
                <View style={{flexDirection:'row',alignItems:'center',}}>
                    <Text style={styles.title}>Product Details</Text>
                    <Pressable style={{position:'absolute',right:5}} onPress={()=>{
                        setdes(d=>!d)
                    }}>
                        <Feather name={!des?'chevron-up':'chevron-down'} size={30} />
                    </Pressable>
                </View>
                {des&&<Text style={styles.details}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur eget dui et rhoncus. Nullam gravida semper orci id efficitur.
                </Text>}
            </View>
    )
}
export default Descripion;