import React from 'react'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import PropTypes from 'prop-types'


const LeadsTable = ({leads, onSortChange}) =>{
    //console.log(leads)
      return(
        <table id="datatables-basic" className="table table-striped">
        <thead>
            <tr>
                <th onClick={()=>onSortChange('name')}>Name</th>
                <th>Email</th>
                <th>Wedding Date</th>
                <th>Venue</th>
                <th>Status</th>
            </tr>
        </thead>
        <tbody>
            {leads.map( item =>(
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
      
    
    export default LeadsTable