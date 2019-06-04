import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Spinner from '../../commons/spinner'
import { getLeads } from '../../../actions/leads'
import Pagination from '../../commons/pagination'
import LeadsTable from '../leads/LeadsTable'

const Leads = ({getLeads, auth : {user}, leads: {lead, loading}, paginate: {pageSize, currentPage}}) => {
        
    useEffect(()=>{ getLeads()}, [])
    console.log(pageSize)
       return(
        <Fragment>
            <h1>Leads Page</h1>
            <Link to="/leadform" className="btn btn-primary my-1">Add New Lead</Link>
            {loading ? <Spinner/> :
                <Fragment>                   
                    <h1>Leads:</h1>
                    <div>
                    { lead.length > 0 ? (
                        <LeadsTable />
                    ) : <p>No Leads</p>}               
                    </div>
                </Fragment>
            }
             <Pagination pageSize = {pageSize} currentPage={currentPage} />
        </Fragment>
    )
}

 Leads.propTypes = {
    auth : PropTypes.object.isRequired,
    leads: PropTypes.object.isRequired
 }

const mapStateToProps = state =>({
    auth : state.auth,
    leads: state.leads,
    paginate: state.paginate
   })
export default connect(mapStateToProps, {getLeads})(Leads)