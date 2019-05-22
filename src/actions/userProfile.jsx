import http from '../services/httpService'
import { apiUrl } from '../config.json'
import { setAlert } from './alert'
import {
    GET_PROFILE,
    PROFILE_ERROR,
    CREATE_PROFILE
} from './types'

//Get Profile

export const getCurrentProfile = () => async dispatch => {
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
export const createNewProfile = (formData) => async dispatch =>{
    const apiEndPoint = apiUrl + "profile/me"
    try{
        const response = await http.post(apiEndPoint, formData)
        dispatch({
           type: CREATE_PROFILE,
           payload: formData
        })
        dispatch(setAlert("Profile Created!"))
    } catch(ex){
       dispatch({
           type: PROFILE_ERROR,
           payload: ex.response.data
       })
    }
   
}