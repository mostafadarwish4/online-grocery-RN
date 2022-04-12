import firestore from '@react-native-firebase/firestore'

export const getProducts=(category)=>async dispatch=>{
    try {
        let list=[]
        firestore().collection(category).then((docs)=>{
            docs.forEach(element => {
                list.push(element.data())
            });
            dispatch({type:'add_products',payload:{products:list,cat:category}})
        })
    } catch (e) {
        dispatch({type:'add_error',payload:e.code})
    }
}

export const getAll=()=>async dispatch=>{
    try {
        let list={
            fruits:[],
            meat:[],
            beverages:[],
            bakery:[]
        }
        let categries=['fruits','meat','beverages','bakery']
        for(let x of categries){
            firestore().collection(x).limit(5).then((docs)=>{
            docs.forEach(element => {
                list[x].push(element.data())
            })
            });
        }
        dispatch({type:'all',payload:list})
    } catch (e) {
        dispatch({type:'add_error',payload:e.message})
    }
}