import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import jwtDecode from "jwt-decode";

const initialState: any = {
    data:  undefined,
}

//Check if Token hasn't expired 
if(localStorage.getItem('token')){
    //We decode token to get expiration date
    const decodeToken:any = jwtDecode(localStorage.getItem('token') || '{}')
    //If expired we remove token 
    if(Date.now() >= (decodeToken.exp * 1000)){
        localStorage.removeItem('token')
    }else{
        //We set the user state with the his information
        initialState.data = { 
            ...initialState.data,
            ...decodeToken
        } ;
    }
}
declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const reducer = ( state: object = initialState, action: any  ) => {
    switch(action.type){
        case "loginUser":
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                data: action.payload
            }
        case "logoutUser":
        localStorage.removeItem('token')
        return {
            ...state,
            data: undefined
        }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)