import React from 'react'
import { StyleSheet, Text ,TouchableOpacity } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../../store/auth/actions'
const OutBtn=()=>{
    const dispatch=useDispatch();
    const type=useSelector(state=>state.type);
    const out=()=>{
        dispatch(signOut())
    }
    return(
        <TouchableOpacity style={styles.root} onPress={out}>
            <Ionicons style={{position:'absolute',left:5}} name='exit-outline' size={30} color={'#2f80c2'} />
            <Text style={styles.text}>Logout</Text>
        </TouchableOpacity>
    )
}
export default OutBtn;
const styles=StyleSheet.create({
    root:{
        flexDirection:'row',
        justifyContent:'center',
        backgroundColor:'#e8ebe9',
        borderRadius:14,
        borderWidth:1,
        borderColor:'#d5dbd9',
        alignItems:'center',
        minHeight:50,
        width:'80%',
        alignSelf:'center',
        margin:20

},
    text:{
        color:'#2f80c2',//#65ad66
        alignSelf:'center',
        fontSize:25

    }
})