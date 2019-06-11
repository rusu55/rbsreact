import React, { Fragment, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import _ from 'lodash'
import Spinner from '../../commons/spinner'
import { getLeads } from '../../../actions/leads'
import Pagination from '../../commons/pagination'
import LeadsTable from './LeadsTable'
import LeadSticker from '../leadSticker';

const Leads = ({getLeads, auth : {user}, leads: {lead, loading}, paginate}) => {
        
    useEffect(()=>{ getLeads()}, [])
    
       return(
        <Fragment>
            <main className="content">
				<div className="container-fluid p-0">
                <h1 className="h3 mb-3">Leads</h1>
                <div className="row">
						<div className="col-xl-8">
							<div className="tab-content">
								<div className="tab-pane fade show active" id="account" role="tabpanel">								
									<div className="card">
										<div className="card-header">
                                        <Link to="/leadform" className="btn btn-primary my-1">Add New Lead</Link>
										</div>
										<div className="card-body">
                                             
                                             {loading ? <Spinner/> :
                                                <Fragment>                
                                                    { lead.length > 0 ? (
                                                        <LeadsTable />
                                                    ) : <p>No Leads</p>}       
                                                 </Fragment>
                                             }
                                             <Pagination paginate= {paginate} leads = {lead} />
										</div>
                                        
									</div>
								</div>								
							</div>
						</div>
                       <LeadSticker />
					</div>
                </div>
            </main>            
             
        </Fragment>
    )
}

 Leads.propTypes = {
    auth : PropTypes.object.isRequired,
    leads: PropTypes.object.isRequired,
    paginate: PropTypes.object.isRequired
 }

const mapStateToProps = state =>({
    auth : state.auth,
    leads: state.leads,
    paginate: state.paginate
   })
export default connect(mapStateToProps, {getLeads})(Leads)