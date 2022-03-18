import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


const initialState: object = {
    data: {},
    pending: false,
    error: null
}

export const PENDING_USER_FETCH = 'user/PENDING_USER_FETCH'
export const SUCCEED_USER_FETCH = 'user/SUCCEED_USER_FETCH'
export const FAIL_USER_FETCH = 'user/FAIL_USER_FETCH'

export const pendingUser = () => ({
    type: PENDING_USER_FETCH
})

export const succeedUserFetch = (user: any) => ({
    type: SUCCEED_USER_FETCH,
    data: user
})

export const failUserFetch = (err: any) => ({
    type: FAIL_USER_FETCH,
    error: err
})

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const reducer = ( state: object = initialState, action: any  ) => {

    switch(action.type){
        case PENDING_USER_FETCH:
            return {
                ...state,
                user: action.payload
            }
        case SUCCEED_USER_FETCH:
            return {
                ...state,
                user: {}
            }
        case FAIL_USER_FETCH:
            return {
                ...state,
                error: action.error
            }
        default:
            return state
    }
}

export const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(thunk))
)