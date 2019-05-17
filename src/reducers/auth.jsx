import { LOGIN_SUCCESS,
     LOGIN_FAIL, 
     REGISTER_SUCCESS, 
     REGISTER_FAIL,
     LOGOUT
    } from '../actions/types'

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    user: null
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
            case  LOGIN_SUCCESS:
            case  REGISTER_SUCCESS:
                localStorage.setItem('token', payload)
                return {
                     ...state,                    
                     isAuthenticated: true,
                     loading: false,
                     user: null
                }
            case LOGIN_FAIL:
            case REGISTER_FAIL:
            case LOGOUT:
                localStorage.removeItem('token')
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    loading: false
               }
            default: return state
    }
}