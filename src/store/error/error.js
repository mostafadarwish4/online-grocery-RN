export const clearErrorMessage=()=>dispatch=>{
    dispatch({type:'add_error',payload:null})
}
export const errReducer=(state='',action)=>{
    switch(action.type){
        case 'add_error':
            return action.payload
        default:
            return state
    }
}