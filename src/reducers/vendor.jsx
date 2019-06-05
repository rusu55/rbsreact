import { GET_VENDOR_PROFILE, VENDOR_PROFILE_ERROR } from '../actions/types'

const initialState = {
    profile : null,
    loading: true,
    error:[]
}

export default function(state= initialState, action){
    const {type, payload} = action
    switch(type){
        case GET_VENDOR_PROFILE: 
            return {
                ...state,
                profile: payload,
                loading: false
            } 
        case VENDOR_PROFILE_ERROR :
            return {
                ...state,
                loading: false
            }
        default: 
            return state
    }
}