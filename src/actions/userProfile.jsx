import {
    GET_PROFILE,
    PROFILE_ERROR
} from './types'

import { apiUrl } from '../config.json'
import http from '../services/httpService'

export const getUserProfile = () => async dispatch =>{
    const endPointUrl = apiUrl + "profile/me"

    try{
        const result = await http.get(endPointUrl)
        dispatch({
            type: GET_PROFILE,
            payload: result.data
        })
    }
    catch(ex){
        dispatch({
            type: PROFILE_ERROR,
            payload: ex.data
        })
    }

}