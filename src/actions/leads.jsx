import { CREATE_LEAD, LEAD_ERROR } from './types'
import http from '../services/httpService'
import { apiUrl } from '../config.json'
import { setAlert } from './alert'

export const createNewLead = (formData, history) => async dispatch =>{
    const apiEndPoint = apiUrl + "leads"
    try{
        const result = await http.post(apiEndPoint,formData)
        dispatch({
            type: CREATE_LEAD,
            payload: formData
        })
        dispatch(setAlert("New Lead Added!"))
        history.push('/leads')
    }
    catch(ex){
        let errors = null
        if(ex.response.status === 404 )  errors = " 404 Unexpected Error!"         
        if(ex.response.status === 500 )  errors ="500 Server Error!"
       
        if(errors) {
            //errors.forEach(error => dispatch(setAlert(error.data, 'danger')))
            dispatch(setAlert(errors, 'danger'))
            dispatch({
                type: LEAD_ERROR
            })
        } 
    }      
   }
   