import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Joi from 'joi-browser'

import Form from '../../commons/form'

class CreateProfile extends Form {
    render(){
        return(
            <h1>Create Profile</h1>
        )
    }
}

export default connect(null)(CreateProfile)