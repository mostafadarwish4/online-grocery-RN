import firestore from "@react-native-firebase/firestore";
import auth from '@react-native-firebase/auth'

export const fetchCategory=async(category,limit)=>{
    const list=[]
    await firestore().collection(category).limit(limit||10).get().then(docs=>{
        docs.forEach(element=>{
            list.push({id:element.id,...element.data()})
        })
    })
    return list
}
export const fetchAll=async()=>{
    const list=[]
    let categories=['eggs','meat','fruits','beverages','bakery']
    for(let x of categories){
         await firestore().collection(x).get().then(docs=>{
        docs.forEach(element=>{
            list.push({id:element.id,...element.data()})
            })
        })
    }
    return list
}