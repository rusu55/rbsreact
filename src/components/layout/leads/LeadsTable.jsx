import React from 'react'
import { Link } from 'react-router-dom'

const LeadsTable = (props) =>{
    const { data, onSort } = props
    return(
                    <table className="table">
                        <thead>
                            <tr>
                            <th onClick ={()=> onSort('name')}>Name</th>
                            <th>Email</th>
                            <th onClick ={()=> onSort('weddingDate')}>Wedding Date</th>
                            <th>Venue</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map( item =>(
                                 <tr key={item._id}>
                                 <td><Link to={`/editLead/${item._id}`}>{item.name}</Link></td>
                                 <td>{item.email}</td>
                                 <td>{item.profile.weddingDate}</td>
                                 <td>venue</td>
                             </tr>
                            ))}
                           
                        </tbody>
                    </table>
    )
}

export default LeadsTable