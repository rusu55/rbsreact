import React , { Fragment} from 'react'
import _ from 'lodash'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { paginateData } from '../../actions/paginate'

const Pagination = ({leads: {lead}, paginateData, paginate: {pageSize, currentPage, data, sort}}) =>{
    
    const itemsCount = lead === null ? 0 : lead.length
    const pagesCount = Math.ceil(itemsCount / pageSize)
    if (pageSize === 1) return null
    
    const pages = _.range(1, pagesCount + 1)

    return(
        <Fragment>
            <nav>
                <ul className="pagination">
                    { pages.map(page => (
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <a className="page-link" onClick ={()=>paginateData(lead, page, sort)}>{page}</a>
                        </li>
                    ))}
                </ul>
            </nav>
        </Fragment>
    )
}

Pagination.propTypes ={
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

const mapStateToProps = state =>({
    leads: state.leads,
    paginate: state.paginate
    
})

export default connect(mapStateToProps, {paginateData})(Pagination)