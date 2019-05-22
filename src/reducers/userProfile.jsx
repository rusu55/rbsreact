<<<<<<< HEAD
import { PROFILE_ERROR, GET_PROFILE, CLEAR_PROFILE, CREATE_PROFILE } from "../actions/types";
=======
import {
    GET_PROFILE,
    PROFILE_ERROR,
    CLEAR_PROFILE
} from '../actions/types'
>>>>>>> d7eaa5c52cd4ac58d9d8a876cee3d25c94df23a1


const initialState ={
    profile: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
<<<<<<< HEAD
        case GET_PROFILE:
         return {
             ...state,
             profile : payload,
             loading: false
         }   
        case PROFILE_ERROR:
          return {
              ...state,
              loading: false,
              error: payload
          } 

        case CLEAR_PROFILE : 
          return {
              ...state,
              profile : null,
              loading: false,
              error: null,
          }

        case CREATE_PROFILE : {
            return{
                ...state,
                loading: false,
                profile: payload,
                error: null
            }
        }

        default : {
            return state
        }
=======
        case GET_PROFILE : 
            return {
                ...state,
                profile: payload,
                loading: false,
            }
        case PROFILE_ERROR :
            return {
                ...state,
                loading: false,
                error: payload
            }
        
            case CLEAR_PROFILE : 
            return {
                ...state,
                profile : null,
                loading: false
            }
        default: return state
>>>>>>> d7eaa5c52cd4ac58d9d8a876cee3d25c94df23a1
    }
}