import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root:{
        margin:10,
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    image:{
        marginTop:40,
         height:150,
         width:'90%',
        resizeMode:'contain',
        alignSelf:'center',
        
    },
    pickerConteiner:{
        width:'90%',
        borderBottomWidth:1,
        borderBottomColor:'#d2d4d2',
        margin:20
    },
   picText:{
       fontSize:15,
        color:'grey',
},
    head:{
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'center',
        marginTop:20
    },
    text:{
        fontSize:15,
        color:'grey',
        alignSelf:'center',
        maxWidth:'80%'
    },
})