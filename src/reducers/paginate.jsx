import { PAGINATE } from '../actions/types'

const initialState = {
    pageSize: 2,
    currentPage: 1,
    data: [],
    sortBy: { path : 'name', order : 'asc'}
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case PAGINATE:
            return {
                ...state,
                data: payload.data,
                currentPage: payload.pageNumber,
                sortBy:  payload.orderBy
            }   
        default: return state      
    }   
}