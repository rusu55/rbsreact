import { LOGIN_SUCCESS, LOGIN_FAIL } from '../actions/types'

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
                console.log(payload)
                localStorage.setItem('token', payload[1])
                return {
                     ...state,
                     ...payload,
                     isAuthenticated: true,
                     loading: false,
                     user: payload[0]
                }
            case LOGIN_FAIL:
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