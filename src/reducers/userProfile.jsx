import { PROFILE_ERROR, GET_PROFILE, CLEAR_PROFILE, CREATE_PROFILE } from "../actions/types";


const initialState ={
    profile: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action
    console.log("Profile Reducer!")
    switch(type){
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
    }
}