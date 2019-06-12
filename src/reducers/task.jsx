import { GET_TASKS, TASKS_ERROR } from '../actions/types'

const inistialState = {
    tasks : null,
    loading: true,
    error: {}
}

export default function(state = inistialState, action){
    const { type, payload } = action

    switch(type){
        case GET_TASKS: 
            return {
                ...state,
                tasks: payload,
                loading: false
            } 
        default: return state
    }
}