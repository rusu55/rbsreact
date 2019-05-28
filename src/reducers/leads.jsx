import { CREATE_LEAD, LEAD_ERROR } from '../actions/types'

const initialState = {
    profile: null,
    loading: true,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload} = action
    console.log("Create Lead Reducer")
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
                error: payload
             }  
        default : 
            return state
    }
    
}