
import { CREATE_LEAD , LEAD_ERROR, GET_LEADS, GET_LEAD_PROFILE} from '../actions/types'
import { pageSize } from '../config.json'

const initialState = {
    lead: null,
    loading: true,   
    itemsCount : 0,
    currentPage : 1,
    pageSize: pageSize,
    skip: 0,  
    sortBy: 'name',
    orderBy: 'asc',
    error : {}
}

export default function(state = initialState, action){
    const { type, payload} = action
    console.log(payload)
    switch(type) {
        case CREATE_LEAD : 
            return {
                ...state,
                profile: payload,
                loading: false,
                error : null,
            }
         case   LEAD_ERROR :
             return {
                ...state,
                loading: false,
            }   
        case GET_LEADS:
            return {
                ...state,
                loading: false,
                lead: payload.leads,
                skip: payload.skip,
                itemsCount : payload.leadsCount,
                currentPage: payload.page,
                sortBy: payload.path,
                orderBy: payload.order
            }

        case GET_LEAD_PROFILE:
            return {
                ...state,
               // loading: false,
               // lead: payload
                //itemsCount: payload.leadsCount
            }   
        default : 
            return state
    }
    
}