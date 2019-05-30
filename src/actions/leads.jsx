<<<<<<< HEAD
import { CREATE_LEAD, LEAD_ERROR, GET_LEADS, GET_LEAD_PROFILE } from './types'
=======
import { CREATE_LEAD, LEAD_ERROR } from './types'
<<<<<<< HEAD
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
=======
>>>>>>> 54f04169a63e803b5d60f50b10d76299f49faa18
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
        if(ex.response.status === 404 || ex.response.status === 500 )  errors = " Server Unexpected Error!"         
        else{
            errors = ex.response.data
        }
        
        
        if(errors) {
            //errors.forEach(error => dispatch(setAlert(error.data, 'danger')))
            dispatch(setAlert(errors, 'danger'))
            dispatch({
                type: LEAD_ERROR
            })
        } 
    }      
   }
<<<<<<< HEAD

   export const getLeads = () => async dispatch =>{
       const apiEndPoint = apiUrl + "leads"

       try{
        const result = await http.get(apiEndPoint)
        dispatch({
            type: GET_LEADS,
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
                type: LEAD_ERROR
            })
        } 
    }  
      
   }

   export const getLeadProfile = id => async dispatch =>{
       try{
        const apiEndPoint = apiUrl + `leads/${id}`
        const result = await http.get(apiEndPoint)
        dispatch({
            type: GET_LEAD_PROFILE,
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
                type: LEAD_ERROR
            })
        } 
    }  
   }
   
=======
   
>>>>>>> 2fc5a14dec2f0cb06259dc016f46386193d4e34a
>>>>>>> 54f04169a63e803b5d60f50b10d76299f49faa18
