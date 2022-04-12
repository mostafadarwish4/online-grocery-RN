import firestore from '@react-native-firebase/firestore'

export const addProduct=(type,product,userId)=>async dispatch=>{
    try {
        //console.log(userId,product)
        const userRef= firestore().collection('users').doc(userId)
        
        firestore().runTransaction(async transaction => {
    // Get post data first
    const userSnapshot = await transaction.get(userRef);

        if (!userSnapshot.exists) {
        throw 'user does not exist!';
        }

    transaction.update(userRef, {
      [type]:[...userSnapshot.data()[type], product],
    });
  }).then(()=>{
    console.log('added')
  })

        
    } catch (e) {
        
        dispatch({type:'add_error',payload:e.message});
    }
}
export const deleteProduct=(type,product,userId)=>async dispatch=>{
    try {
          const userRef= firestore().collection('users').doc(userId)
        
        firestore().runTransaction(async transaction => {
    // Get post data first
    const userSnapshot = await transaction.get(userRef);

        if (!userSnapshot.exists) {
        throw 'user does not exist!';
        }

    transaction.update(userRef, {
      [type]:userSnapshot.data()[type].filter(doc=>doc.id!==product.id),
    });
  }).then(()=>{
    console.log('Deleted')
  })

    } catch (e) {
        dispatch({type:'add_error',payload:e.message});
    }
}

export const addBatch=(products,userId)=>async dispatch=>{
  try {
    const userRef= firestore().collection('users').doc(userId)
    firestore().runTransaction(async transaction => {
      const userSnapshot = await transaction.get(userRef);

      if (!userSnapshot.exists) {
        throw 'user does not exist!';
      }
      let items=userSnapshot.data().products
      for(let x of products){
        items=items.filter(a=>a.id!==x.id)
      }
      //console.log('filterd',filterd)
      transaction.update(userRef, {
        products:[...items,...products],
        fav:[]
      })    
   }).then(()=>{
    console.log('added')
  })
  } catch (e) {
        dispatch({type:'add_error',payload:e.message});
        console.log(console.log(e.message))
  }


}

