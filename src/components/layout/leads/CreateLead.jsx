import React, { Fragment} from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import Joi from 'joi-browser'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createNewLead } from '../../../actions/leads'

import Form from '../../commons/form'


class CreateLead extends Form{
     state ={
        data: {
            name: "", email: "", phone: "", weddingDate: ""
        },
        errors:{}
    }

    schema = {
        name: Joi.string().required().min(4).max(50).label("Name"),
        email: Joi.string().required().min(6).max(50).email().label("Email Address"),
        phone: Joi.string().allow(''),
        weddingDate: Joi.date().allow('')
       
    }

     doSubmit = () =>{     
        this.props.createNewLead( this.state.data, this.props.history)        
    }

    render(){
        return(
            <Fragment>
                <h1>Add New Lead</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name" , "Name") }
                    {this.renderInput("email" , "Email Address") }
                    {this.renderInput("phone" , "Phone Number") }
                    {this.renderInput("weddingDate" , "Wedding Date", "date") }
                    {this.renderButton("Add New Lead")}
                </form>
            </Fragment>
        )
    }
}

CreateLead.propTypes ={
    createNewLead : PropTypes.func.isRequired
}

export default connect(null, { createNewLead })(withRouter(CreateLead))

