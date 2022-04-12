import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import userReducer from './auth/reducer';
import productsReducer from './products/reducer'
import { errReducer } from './error/error';
import userProductsReducer from './userProducts/reducers';

const tokenReducer=(state='',action)=>{
    switch (action.type) {
        case 'token':
          return action.payload
        case 'signout':
            return null
        default:
            return state;
    }
}

const reducer=combineReducers({
    products:productsReducer,
    user:userReducer,
    error:errReducer,
    token:tokenReducer,
})


const store=createStore(reducer,applyMiddleware(thunk));

export default store;