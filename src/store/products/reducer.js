export default (state=[],action)=>{
    switch(action.type){
        case 'get_products':
            return {...state,[action.payload.cat]:action.payload.products}
        case 'all':
            return action.payload
        default:
            return state
    }
}