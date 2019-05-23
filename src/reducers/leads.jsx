import { CREATE_LEAD } from '../actions/types'

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
                ...state
            }
            
                

        default : 
            return state
    }
    
}