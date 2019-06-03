import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth'
import userProfile from './userProfile'
import leads from './leads'
import paginate from './paginate'
 

export default combineReducers({
    alert,
    auth,
    userProfile,
    leads,
    paginate
})