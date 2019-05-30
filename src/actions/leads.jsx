import { CREATE_LEAD, LEAD_ERROR, GET_LEADS, GET_LEAD_PROFILE } from './types'
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
   