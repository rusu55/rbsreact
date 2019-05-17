import http from '../services/httpService'
import { apiUrl } from '../config.json'
import { setAlert } from './alert'
import {
    GET_PROFILE,
    PROFILE_ERROR
    
} from './types'

//Get Profile

export const getCurrentProfile = () => dispatch => {
    const apiEndPoint = apiUrl + "profile/me"

    try{
       // const response = await http.get(apiEndPoint)
       const data ="Sunt eu Profile"
        dispatch({
            type: GET_PROFILE,
            payload: data
        })
    }
    catch(ex){
          dispatch({
            type: PROFILE_ERROR,
            payload: {msg: ex.response.statusText, status: ex.response.status }
        })
    }
    
}