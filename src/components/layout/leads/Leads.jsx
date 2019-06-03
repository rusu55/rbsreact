import React, { Fragment, useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Spinner from '../../commons/spinner'
import { getLeads } from '../../../actions/leads'
import { paginateData } from '../../../actions/paginate'
import Pagination from '../../commons/pagination'
import LeadsTable from '../leads/LeadsTable'


const Leads = ({getLeads, auth : {user}, leads: {lead, loading}, paginateData, paginate: {pageSize, currentPage, data}}) =>{
    const [sortBy, setSort] = useState({path: 'name', order: 'asc'})
    useEffect(()=>{ getLeads()}, [])
    const sorted = _.orderBy(lead, [sortBy.path], [sortBy.order])

    const handlePageChange = (page) =>{
        const sorted = _.orderBy(lead, [sortBy.path], [sortBy.order])
       paginateData(sorted, page)
    }

    const handleSort = (path) =>{
        if(sortBy.path === path) sortBy.order = (sortBy.order === 'asc') ? 'desc' : 'asc'
        console.log(sortBy.order)
        setSort({path: path, order: sortBy.order})
         paginateData(sorted, currentPage, sortBy)
        //setSort({path: path, order: 'desc'})
       // console.log(sortBy)
    }
     
    
    return(
        <Fragment>
            <h1>Leads Page</h1>
            <Link to="/leadform" className="btn btn-primary my-1">Add New Lead</Link>
            {loading ? <Spinner/> :
                <Fragment>                   
                    <h1>Leads:</h1>
                    <div>
                    { lead.length > 0 ? (
                        <LeadsTable data={data} onSort={handleSort} />
                    ) : <p>No Leads</p>}               
                    </div>
                </Fragment>
            }
             <Pagination  itemsCount={lead === null ? 0 : lead.length} pageSize={pageSize} currentPage={currentPage} onPageChange={handlePageChange}  />
        </Fragment>
    )
}

Leads.propTypes ={
    getLeads : PropTypes.func.isRequired,
    paginateData: PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    auth : state.auth,
    leads: state.leads,
    paginate: state.paginate
})
export default connect(mapStateToProps, {getLeads, paginateData})(Leads)