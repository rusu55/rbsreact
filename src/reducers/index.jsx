import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import userProfile from './userProfile'
import leads from './leads'
 

export default combineReducers({
    alert,
    auth,
    userProfile,
    leads
})