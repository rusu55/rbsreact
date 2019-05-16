import axios from 'axios'
import { setAlert } from './alert'
import { LOGIN_SUCCESS, LOGIN_FAIL } from './types'

//Login User
export const login = ({email, password}) => async dispatch =>{
   const config = {
       headers: {
           'Content-Type': 'application/json'
       }
   }
   const body = JSON.stringify({ email, password})
   
   try{
        const res = await axios.post('http://localhost:3000/api/auth', body, config)
        console.log(res)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
   }
   catch(err){
        const errors = err.response.data
        //console.log(err.response.data)
        if(errors) {
            //errors.forEach(error => dispatch(setAlert(error.data, 'danger')))
            dispatch(setAlert(errors, 'danger'))
        }
        dispatch({
            type: LOGIN_FAIL
        })
   }
}