import { SIDEBAR_VISIBLE } from '../actions/types'

const initalState ={
    isOpen: true
}

export default function(state= initalState, action){
    const { type } = action

    switch(type){
        case SIDEBAR_VISIBLE:
            return{
                ...state,
                 isOpen: !state.isOpen

             }
        default: return state
    }
}