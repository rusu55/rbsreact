import { CREATE_LEAD , LEAD_ERROR} from '../actions/types'

const initialState = {
   lead: null,
    loading: true,

}

export default function(state = initialState, action){
    const { type, payload} = action
    console.log("Create Lead Reducer")
    switch(type) {
        case CREATE_LEAD : 
            return {
                ...state,
                lead: payload,
                loading: false,
                error: null
            }
        case LEAD_ERROR:
            return {
                ...state,
                loading: false,
            }      
        default : 
            return state
    }
    
}