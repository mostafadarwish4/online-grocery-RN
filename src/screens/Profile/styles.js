import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    root:{
        backgroundColor:'white',
        margin:2,
        flex:1
    },
    picContainer:{
        margin:15,
        borderBottomWidth:1,
        borderBottomColor:'#cdd0d1',
        flexDirection:'row',
        alignItems:'center',
    },
    nametext:{
        marginLeft:10,
        fontWeight:'bold',
        fontSize:18,
        //color:'white'
    }
    ,
    pic:{
        height:80,
        width:80,
        borderRadius:50,
        backgroundColor:'black',
        margin:10,
        borderWidth:1,
        borderColor:'white'
    },
    text:{
        fontSize:16,
        fontWeight:'bold',
        flex:3
        
    },
    moveContainer:{
        borderBottomColor:'#cdd0d1',
        borderBottomWidth:1,
        height:50,
        margin:10,
        alignItems:'center',   
        flexDirection:'row',
    }
})