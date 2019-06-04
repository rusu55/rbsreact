import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { sortData } from '../../../actions/paginate'

const LeadsTable = ({leads: {lead}, paginate: {data,sort}, sortData}) =>{
      return(
                    <table className="table">
                        <thead>
                            <tr>
                            <th onClick ={()=> sortData('name', sort, lead)}>Name</th>
                            <th>Email</th>
                            <th onClick ={()=> sortData('weddingDate', sort, lead)}>Wedding Date</th>
                            <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map( item =>(
                                 <tr key={item._id}>
                                 <td><Link to={`/editLead/${item._id}`}>{item.name}</Link></td>
                                 <td>{item.email}</td>
                                 <td></td>
                                 <td>venue</td>
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