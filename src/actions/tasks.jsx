import { GET_TASKS, TASKS_ERROR } from '../actions/types'
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