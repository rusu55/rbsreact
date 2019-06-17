import { GET_TASKS, TASKS_ERROR, SET_TASK, CREATE_TASK } from '../actions/types'
import { apiUrl } from '../config.json'
import http from '../services/httpService'
import { setAlert } from '../actions/alert'

export const getTasks = () => async dispatch =>{
    const apiEndPoint = apiUrl + "tasks"

    try{
        const result = await http.get(apiEndPoint)
        dispatch({
            type: GET_TASKS,
            payload: result.data
        })
    }
    catch(ex){
        let errors = null
        if(ex.response.status === 404 || ex.response.status === 500 )  errors = " Server Unexpected Error!"         
        else{
            errors = ex.response.data
        }
        
        
        if(errors) {
            //errors.forEach(error => dispatch(setAlert(error.data, 'danger')))
            dispatch(setAlert(errors, 'danger'))
            dispatch({
                type: TASKS_ERROR
            })
        } 
    }  

}

export const SetTask = id => dispatch =>{
   // console.log(id)
    dispatch({
        type: SET_TASK,
        payload: id
    })
}

export const createNewTask = data => dispatch =>{
    //console.log(data)

    dispatch({
        type: CREATE_TASK,
        payload: data
    })
}

