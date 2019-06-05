import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class EditVendorProfile extends Component{
    render(){
        return(
            <h1>Edit Profile</h1>
        )
    }
}

EditVendorProfile.propTypes ={

}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps, {})(EditVendorProfile)