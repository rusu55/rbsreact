import React from 'react'
import PropTypes from 'prop-types'

import {connect} from 'react-redux'
import { getVendorProfileById } from '../../actions/vendor'

const Profile = ({ match, getVendorProfileById, vendor: { profile, loading}, auth }) =>{
   // useEffect(()=>{getVendorProfileById(match.params.id)}, [getVendorProfileById])
    return(
        <h1>Profile:  { match.params.id }</h1>
    )
}

Profile.propTypes ={

}

const mapStateToProps = state => ({
    auth: state.auth,
    vendor: state.vendor
})
export default connect(mapStateToProps, {getVendorProfileById})(Profile)