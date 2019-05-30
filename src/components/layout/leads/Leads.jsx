import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Spinner from '../../commons/spinner'
import { getLeads } from '../../../actions/leads'

const Leads = ({getLeads, auth : {user}, leads: {lead, loading}}) =>{
    useEffect(()=>{ getLeads()}, [])
    return(
        <Fragment>
            <h1>Leads Page</h1>
            <Link to="/leadform" className="btn btn-primary my-1">Add New Lead</Link>
            {loading ? <Spinner/> :
                <Fragment>
                <h1>Leads:</h1>
                <div>
                { lead.length > 0 ? (
                        <table className="table">
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Wedding Date</th>
                            <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            { lead.map( item =>(
                                 <tr key={item._id}>
                                 <td><Link to={`/editLead/${item._id}`}>{item.name}</Link></td>
                                 <td>{item.email}</td>
                                 <td>{item.profile.weddingDate}</td>
                                 <td>venue</td>
                             </tr>
                            ))}
                           
                        </tbody>
                    </table>
                ) : <p>No Leads</p>}
                
                </div>
                </Fragment>
            }
        </Fragment>

    )
}

Leads.propTypes ={
    getLeads : PropTypes.func.isRequired
}

const mapStateToProps = state =>({
    auth : state.auth,
    leads: state.leads
})
export default connect(mapStateToProps, {getLeads})(Leads)