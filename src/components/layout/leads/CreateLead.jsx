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

<<<<<<< HEAD
     doSubmit = () =>{     
        this.props.createNewLead( this.state.data, this.props.history)        
=======
     doSubmit = () =>{
        console.log("Form Submited!")
        this.props.createNewLead(this.state.data, this.props.history)
        console.log("Back!")
>>>>>>> 2fc5a14dec2f0cb06259dc016f46386193d4e34a
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
<<<<<<< HEAD
    createNewLead : PropTypes.func.isRequired
=======
    createNewLead: PropTypes.func.isRequired
>>>>>>> 2fc5a14dec2f0cb06259dc016f46386193d4e34a
}

export default connect(null, { createNewLead })(withRouter(CreateLead))

