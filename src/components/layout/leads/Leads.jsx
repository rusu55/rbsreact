import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Leads = () =>{
    return(
        <Fragment>
            <h1>Leads Page</h1>
            <Link to="/leadform" className="btn btn-primary my-1">Add New Lead</Link>
        </Fragment>
    )
}

export default Leads