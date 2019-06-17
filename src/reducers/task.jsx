import { GET_TASKS, TASKS_ERROR, SET_TASK, CREATE_TASK} from '../actions/types'

const inistialState = {
    tasks : [],
    finished: false,
    loading: true,
    error: {}
}

export default function(state = inistialState, action){
    const { type, payload } = action
    let tasks =[] 

    switch(type){
        case GET_TASKS: 
            return {
                ...state,
                tasks: payload,
                loading: false
            } 
        case SET_TASK:  
                tasks =[...state.tasks]                           
                let index = tasks.findIndex( obj => obj._id === payload)
                tasks[index].finished && tasks[index].finished === true ? (tasks[index].finished) = !tasks[index].finished 
                : (tasks[index].finished = true)                               
               
            return {                               
                ...state                           
            }
        case CREATE_TASK:
               // tasks =[...state.tasks]
                //console.log('dsdadas')
               // tasks =[payload, ...state.tasks]
              // console.log(tasks)
            return{
                ...state,
                tasks: [ payload, ...state.tasks],
                loading: false
            }
        default: return state
    }
}