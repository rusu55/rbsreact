import { CREATE_LEAD, LEAD_ERROR } from './types'
import { apiUrl } from '../config.json'
import { setAlert } from '../actions/alert'

import http from '../services/httpService'

export const createNewLead = (formData, history) => async dispatch =>{
     const apiEndPoint = apiUrl + 'leads'

     try{
        const response = await http.post(apiEndPoint, formData)
        
        dispatch({
            type: CREATE_LEAD,
            payload : response.data
        })
        dispatch(setAlert("New Lead Added!", "success"))
        history.push('/')
     }
     catch(ex){
        dispatch({
            type: LEAD_ERROR,
            payload: ex.response.data
        })
        dispatch(setAlert( ex.response.data , "success"))
     }

   
}