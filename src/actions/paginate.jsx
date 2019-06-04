import { PAGINATE, SORT_BY } from './types'
import { pageSize } from '../config.json'
import _ from 'lodash'

export const paginateData = (data, pageNumber, sort) => dispatch =>{
   // let sortBy ={} 
    let sorted = []
    if(sort === null)  {
        
        sorted = _.orderBy(data, ['name'], ['asc']) 
       // console.log(sorted) 
       sort = {path : 'name', order : 'asc'}
    }
    else{            
        sorted = _.orderBy(data, [sort.path], [sort.order] )
        //sortBy = {path : sort.path, order : sort.order}
    }
   
    const startIndex = (pageNumber - 1) * pageSize;
    const result = {}
    result.data = _(sorted)
                    .slice(startIndex)
                    .take(pageSize)
                    .value();
    result.pageNumber = pageNumber
    
    dispatch({
        type: PAGINATE,
        payload: { result, sort }
    })
}

export const sortData = (path, sort, data) => dispatch =>{
    let order = '' 
    let pageNumber = 1
    if(sort.path === path) order = (sort.order === 'asc') ? order = 'desc' : order = 'asc'
    console.log(path)
    let sorted = []
    if(order === null)  {
        sorted = _.orderBy(data, ['name'], ['asc']) 
    }
    else{     
       
        sorted = _.orderBy(data, [path], [order] )
    }
   
    const startIndex = (pageNumber - 1) * pageSize;
    const result = {}
    result.data = _(sorted)
                    .slice(startIndex)
                    .take(pageSize)
                    .value();
    result.pageNumber = pageNumber
    
    dispatch({
        type: PAGINATE,
        payload: {result, sort :{ path, order}}
    })
}

