import { PAGINATE, SORT_BY } from '../actions/types'

const initialState = {
    pageSize: 2,
    currentPage: 1,
    data: [],
    sort : { path: 'name', order: 'asc'}
   
}

export default function(state = initialState, action){
    const { type, payload } = action
   
    switch(type){
        case PAGINATE:
            return {
                ...state,
                data: payload.result.data,
                currentPage: payload.result.pageNumber,
                sort : payload.sort
            }  
        case SORT_BY:
            return {
                ...state,                
            } 
        default: return state      
    }   
}