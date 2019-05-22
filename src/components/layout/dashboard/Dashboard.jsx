import React, { Fragment, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import { getUserProfile } from '../../../actions/userProfile'
import Spinner from '../../commons/spinner'

const Dashboard = ({ getUserProfile, auth, userProfile :{profile, loading} }) =>{
    
    useEffect(()=>{
        getUserProfile()
    }, [])

    
    return (
        <Fragment>
             <h1>Dashboard</h1>
             <p>Welcome User : {auth.user && auth.user.name }</p>
             {loading ? <Spinner/> : ""}
             { profile !== null ?  
                <Fragment>
                    {profile.company}
                    <Link to='/editProfile' className="btn btn-primary my-1">Edit Profile</Link>
                </Fragment>  : 
                <Fragment>
                    <Link to='/createProfile' className="btn btn-primary my-1">Create Profile</Link>
                </Fragment> }
            
        </Fragment>
    )
    
}

Dashboard.propTypes ={
 getUserProfile: PropTypes.func.isRequired,
 auth: PropTypes.object.isRequired,
 userProfile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    auth: state.auth,
    userProfile: state.userProfile
})
export default connect(mapStateToProps, {getUserProfile})(Dashboard)