export default (state=null,action)=>{
    switch(action.type){
        case 'signin':
            return {...action.payload}
        case 'signout':
            return null
        case 'change':
            return  {...action.payload}    
        default:
            return state
    }
}