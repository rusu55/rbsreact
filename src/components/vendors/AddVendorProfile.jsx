import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { connect } from 'react-redux'

class AddVendorProfile extends Component{
    render(){
        return(
            <h1>Add Vendor Profile</h1>
        )
    }
}

AddVendorProfile.propTypes ={

}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {})(AddVendorProfile)