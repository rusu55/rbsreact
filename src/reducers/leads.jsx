<<<<<<< HEAD
import { CREATE_LEAD, LEAD_ERROR } from '../actions/types'
=======
import { CREATE_LEAD , LEAD_ERROR} from '../actions/types'
>>>>>>> 2fc5a14dec2f0cb06259dc016f46386193d4e34a

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