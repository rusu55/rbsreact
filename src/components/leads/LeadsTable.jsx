import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { sortData } from '../../actions/paginate'

const LeadsTable = ({leads: {lead}, paginate: {data,sort}, sortData}) =>{
      return(
        <table id="datatables-basic" className="table table-striped">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Wedding Date</th>
                <th>Venue</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {data.map( item =>(
                     <tr key={item._id}>
                           <td><Link to={`/editLead/${item._id}`}>{item.name}</Link></td>
                           <td>{item.email}</td>
                           <td>{Moment(item.weddingDate).format('YYYY-MM-DD')}</td>
                           <td>venue</td>
                           <td>{item.leadType === 'hotLead' ? (<span className='badge badge-success'>Active</span>) : (<span className='badge badge-warning'>Inactive</span>)}</td>
                            
                      </tr>
            ))}                                          
        </tbody>
    </table>
        )
    }
    
    LeadsTable.propTypes = {
        paginate : PropTypes.object.isRequired,
        sortData: PropTypes.func.isRequired
    }
    
    const mapStateToProps = state => ({
        leads: state.leads,
        paginate: state.paginate
    })
    
    export default connect(mapStateToProps,{sortData})(LeadsTable)