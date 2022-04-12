import auth from "@react-native-firebase/auth"
import firestore from '@react-native-firebase/firestore'
import {GoogleSignin} from '@react-native-google-signin/google-signin';


export const persistLogin=()=>dispatch=>{
    const user=auth().currentUser
    if(user) dispatch({type:'token',payload:user.uid})
}
export const getUser=()=>async dispatch=>{
    try {
        
        const user= auth().currentUser
       
        if (user){
             firestore().collection('users').doc(user.uid).onSnapshot(doc => {
                
                dispatch({type:'token',payload:doc.id})
                dispatch({type:'signin',payload:{id:doc.id,...doc.data()}})
        });
        }
    } catch (error) {
        console.log(error.message) 
            dispatch({type:'add_error',payload:'That email address is already in use!'})
    }
}
export const register= (name,email,password)=>async dispatch=>{
    try {
       await  auth().createUserWithEmailAndPassword(email,password)
       const {uid}=auth().currentUser
       const newuser=await  firestore().collection('users').doc(uid).set({
           name,
           password,
           email,
           products:[],
           fav:[],
           image:'',
           Location:{
               name,
               city:'',
               number:'',
               area:''
           }
       })
       
       dispatch({type:'signin',payload:{id:uid}})
    } catch (error) {
        if (error.code === 'auth/email-already-in-use') {
            dispatch({type:'add_error',payload:'That email address is already in use!'})
            console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
            dispatch({type:'add_error',payload:'That email address is invalid!'})
            console.log('That email address is invalid!');
        }
    }
}
export const login=(email,password)=>async dispatch=>{
    try {
        const {uid}=await auth().signInWithEmailAndPassword(email,password)
            firestore().collection('users').doc(uid).onSnapshot(user=>{
            dispatch({type:'token',payload:user.id})
            dispatch({type:'signin',payload:{id:user.id,...user.data()}})
        })
        //console.log(user.data())
        
    } catch (error) {
        dispatch({type:'add_error',payload:error.code})
        console.log(error.code)
    }
}

export const googleLogin=()=>async dispatch =>{//
    try {
            // Get the users ID token
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo = await GoogleSignin.signIn();
        //console.log(userInfo)
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        await auth().signInWithCredential(googleCredential);
        const currentUser=auth().currentUser
        const user=await firestore().collection('users').doc(currentUser.uid).get()
        //console.log(user.data())
        if(user.exists){
            dispatch({type:'token',payload:user.id})
            dispatch({type:'signin',payload:{id:user.id,...user.data()}})
        } else{
            //console.log('curet agoog',currentUser)
           throw "this email didn't registered before please signup first"
        } 
          } catch(error) {
            dispatch({type:'add_error',payload:error.message})
            console.log(error.message);
           
          }
}
export const googleSignup=()=>async dispatch=>{
    try {
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        const userInfo = await GoogleSignin.signIn();
        //console.log(userInfo)
        const googleCredential = auth.GoogleAuthProvider.credential(userInfo.idToken);
        await auth().signInWithCredential(googleCredential);
        const currentUser=auth().currentUser
        const user=await firestore().collection('users').doc(currentUser.uid).get()
        if(user.exists) throw 'this email is already registed, So go to login page instead'
        await firestore().collection('users').doc(currentUser.uid).set({
           name:currentUser.displayName,
           email:currentUser.email,
           products:[],
           fav:[],
           image:currentUser.photoURL,
           Location:{
               name:currentUser.displayName,
               city:'',
               number:'',
               area:''
           }
       })
            
        dispatch({type:'signin',payload:{id:currentUser.uid}})
        
    } catch (error) {
        
    }
}
export const updateLocation=(location,token)=>async dispatch=>{
    try {
        await firestore().collection('users').doc(token).update({location})
        dispatch({type:'token',payload:token})
    } catch (error) {
         dispatch({type:'add_error',payload:error.message})
            console.log(error.message);
    }
}
export const signOut = (g)=>async dispatch=>{
    try {
        await GoogleSignin.revokeAccess(); 
        await auth().signOut()
        dispatch({type:'signout'})
    } catch (error) {
        console.log(error.message)
         dispatch({type:'add_error',payload:error.message})
    }
}