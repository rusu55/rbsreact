
import http from '../services/httpService'
import { apiUrl } from '../config.json'
import { setAlert } from './alert'
import { LOGIN_SUCCESS, 
        LOGIN_FAIL, 
        REGISTER_SUCCESS, 
        REGISTER_FAIL,
        LOGOUT, 
        CLEAR_PROFILE
    } from './types'

//Login User
export const login = ({email, password}) => async dispatch =>{
    const apiEndPoint = apiUrl + "auth"  
   try{
        const response = await http.post(apiEndPoint, {email, password})
       
        dispatch({
            type: LOGIN_SUCCESS,
            payload: response.data
        })
   }
   catch(err){
        let errors = null
        if(err.response.status === 500) {
          errors = "Unexpected Error!"
       } else {
           errors = err.response.data
       }
       
        if(errors) {
            //errors.forEach(error => dispatch(setAlert(error.data, 'danger')))
            dispatch(setAlert(errors, 'danger'))
            dispatch({
                type: LOGIN_FAIL
            })
        }       
   }
}

//Register User

export const registerUser = ({ name, email, password}) => async dispatch =>{
    const apiEndPoint = apiUrl + "users"
    try{
         const response = await http.post(apiEndPoint, {name, email, password})
         
         dispatch({
             type: REGISTER_SUCCESS,
             payload: response.data 
         })
    }
    catch(ex){       
        if (ex.response && ex.response.status === 400) {
            const errors = ex.response.data            
            dispatch(setAlert(errors, 'danger'))            
        }
               
        dispatch({
            type: REGISTER_FAIL
        })
    }
}

//logout 

export const logout = () => dispatch =>{
    dispatch({ type: CLEAR_PROFILE })
    dispatch({ type: LOGOUT })
}
