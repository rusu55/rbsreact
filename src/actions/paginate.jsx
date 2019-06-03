import { PAGINATE } from './types'
import { pageSize } from '../config.json'
import _ from 'lodash'

export const paginateData = (data, pageNumber, orderBy) => dispatch =>{
    const startIndex = (pageNumber - 1) * pageSize;
    const result = {}
    result.data = _(data)
                    .slice(startIndex)
                    .take(pageSize)
                    .value();
    result.pageNumber = pageNumber
    result.orderBy = orderBy

    dispatch({
        type: PAGINATE,
        payload: result
    })
}