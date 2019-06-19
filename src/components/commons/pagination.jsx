import React , { Fragment} from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'


const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) =>{
    
    const pagesCount = Math.ceil(itemsCount / pageSize)
    if (pageSize === 1) return null
    
    const pages = _.range(1, pagesCount + 1)
   
    return(
        <Fragment>
            <nav>
                <ul className="pagination">
                    { pages.map(page => (
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick ={()=>onPageChange(page)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </Fragment>
    )
}

Pagination.propTypes ={
   
}

export default Pagination