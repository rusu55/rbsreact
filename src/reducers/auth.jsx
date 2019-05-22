import { LOGIN_SUCCESS,
     LOGIN_FAIL, 
     REGISTER_SUCCESS, 
     REGISTER_FAIL,
     LOGOUT
    } from '../actions/types'
<<<<<<< HEAD
    import { setHeaderJWT } from '../services/httpService'
=======
import { setHeaderJWT } from '../services/httpService'
>>>>>>> d7eaa5c52cd4ac58d9d8a876cee3d25c94df23a1

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
                localStorage.setItem('token', payload.token)
                setHeaderJWT(localStorage.token)
                return {
                     ...state, 
                     token: payload.token,                   
                     isAuthenticated: true,
                     loading: false,
                     user: payload.user
                }
            case LOGIN_FAIL:
            case REGISTER_FAIL:
            case LOGOUT:
                localStorage.removeItem('token')
                return {
                    ...state,
                    token: null,
                    isAuthenticated: false,
                    user: null,
                    loading: false
               }
            default: return state
    }
}