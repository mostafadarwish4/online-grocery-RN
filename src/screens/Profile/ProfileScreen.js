import React from "react";
import {Text,Image,View} from 'react-native';
import styles from "./styles";
import Move from "./move";
import OutBtn from "./outBtn";
import { useSelector } from "react-redux";

const ProfileScreen=()=>{
    const user=useSelector(state=>state.user)
    console.log(user.id)
    return(
         <View style={styles.root}>
           <View style={styles.picContainer}>
            <Image style={styles.pic} source={user.image?{uri:user.image}:require('./imageonline-co-resizedimage.png')} 
            />
            <View>
                <Text style={styles.nametext}>{user.name}</Text>    
                <Text style={{marginLeft:10,fontSize:17,color:'grey'}}>{user.email}</Text>
            </View>
           </View>
           <View style={{flex:3}}>
                <Move icon='location' text='Loaction details' dest={'form'} />
                <Move icon='archive'text='Orders history' dest={'Orders history'} />
                <Move icon='credit-card'text='Payment card' dest={'Confirm'} />
           </View>
           
           <OutBtn />
        </View>
    )
}

export default ProfileScreen