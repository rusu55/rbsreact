import {
    GET_PROFILE,
    PROFILE_ERROR,
    CREATE_PROFILE
} from './types'

import { apiUrl } from '../config.json'
import http from '../services/httpService'
import { setAlert } from './alert'

export const getUserProfile = () => async dispatch => {
    const apiEndPoint = apiUrl + "profile/me"
    
    
    try{
      
       const response = await http.get(apiEndPoint)
        dispatch({
            type: GET_PROFILE,
            payload: response.data
        })
    }
    catch(ex){
        dispatch({
            type: PROFILE_ERROR,
            payload: ex.response.data
        })
    }
    
}

// Create New Profile
export const createNewProfile = (formData, history) => async dispatch =>{
    const apiEndPoint = apiUrl + "profile/me"
    try{
        const response = await http.post(apiEndPoint, formData)
        dispatch({
           type: CREATE_PROFILE,
           payload: formData
        })
        dispatch(setAlert("Profile Created!"))
        history.push('/dashboard')
    } catch(ex){
       dispatch({
           type: PROFILE_ERROR,
           payload: ex.response.data
       })
    }
   
}

// Edit User Profile
export const editUserProfile = (formData, history) => async dispatch =>{
    const apiEndPoint = apiUrl + "profile/me"
    try{
        const response = await http.put(apiEndPoint, formData)
        dispatch({
           type: CREATE_PROFILE,
           payload: formData
        })
        dispatch(setAlert("Profile Updated!"))
        history.push('/dashboard')
    } catch(ex){
       dispatch({
           type: PROFILE_ERROR,
           payload: ex.response.data
       })
    }
   
}