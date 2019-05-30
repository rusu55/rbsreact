
import { CREATE_LEAD , LEAD_ERROR, GET_LEADS, GET_LEAD_PROFILE} from '../actions/types'

const initialState = {
   lead: null,
    loading: true,
    error : {}
}

export default function(state = initialState, action){
    const { type, payload} = action
    switch(type) {
        case CREATE_LEAD : 
            return {
                ...state,
                profile: payload,
                loading: false,
                error : null,
            }
         case   LEAD_ERROR :
             return {
                ...state,
                loading: false,
            }   
        case GET_LEADS:
        case GET_LEAD_PROFILE:
            return {
                ...state,
                loading: false,
                lead: payload
            }   
        default : 
            return state
    }
    
}