import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { checkToken, setToken } from '../helpers/utils';

const initialState: any = {
    data:  undefined,
};

(()=>{
    const token = checkToken();
    initialState.data = {
        ...initialState.data,
        ...token
    }
})();

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const reducer = ( state: object = initialState, action: any  ) => {
    
    switch(action.type){
        case "loginUser":
            setToken(action.payload.token);
            return {
                ...state,
                data: action.payload,
                token: action.payload.token
            }
        case "logoutUser":
        localStorage.removeItem('token')
            return {
                ...state,
                data: undefined
            }
        case "updateToken":
            setToken(action.payload.token);
            return {
                ...state,
                data: action.payload,
                token: action.payload.token
            }
        case "userNfts":
            return {
                ...state,
                nfts: action.payload,
            }
        case "myTournaments":
            return {
                ...state,
                myTournaments: action.payload, 
            }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)