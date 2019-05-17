import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getCurrentProfile } from '../../../actions/userProfile'

const Dashboard = ({ getCurrentProfile, auth, userProfile }) =>{

    useEffect(()=>{
        getCurrentProfile()
    }, [])

    
    return (
        <Fragment>
             <h1>Dashboard</h1>
             <p>Welcome User : {auth.user && auth.user.name }</p>
          { userProfile !== null ?  <Fragment>{userProfile.profile }</Fragment>  : <Fragment>
          <Link to='/createProfile' className="btn btn-primary my-1">Create Profile</Link>
          </Fragment> }
             
             
        </Fragment>
    )
    
}

Dashboard.propTypes ={
 getCurrentProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 userProfile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    userProfile: state.userProfile
})
export default connect(mapStateToProps, {getCurrentProfile})(Dashboard)