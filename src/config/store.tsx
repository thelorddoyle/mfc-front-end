import { createStore, compose } from 'redux';

const initialState: object = {
    user: {}
}
declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = ( state: object = initialState, action: any  ) => {

    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: {}
            }
        default:
            return state
    }
}       

export const store = createStore(
    reducer,
    composeEnhancers()
)