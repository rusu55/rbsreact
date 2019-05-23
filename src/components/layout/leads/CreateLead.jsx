import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import Joi from 'joi-browser'

import { connect } from 'react-redux'
import { createNewLead } from '../../../actions/leads'

import Form from '../../commons/form'


class CreateLead extends Form{
     state ={
        data: {
            name: "", email: "", phone: "", date: ""
        },
        errors:{}
    }

    schema = {
        name: Joi.string().required().min(4).max(50).label("Name"),
        email: Joi.string().required().min(6).max(50).email().label("Email Address"),
        phone: Joi.string().allow(''),
        date: Joi.date().allow('')
       
    }

     doSubmit = () =>{
        console.log("Form Submited!")
        this.props.createNewLead()
        console.log("Back!")
    }
    render(){
        return(
            <Fragment>
                <h1>Add New Lead</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name" , "Name") }
                    {this.renderInput("email" , "Email Address") }
                    {this.renderInput("phone" , "Phone Number") }
                    {this.renderInput("date" , "Wedding Date", "date") }
                    {this.renderButton("Add New Lead")}
                </form>
            </Fragment>
        )
    }
}

CreateLead.propTypes ={

}

export default connect(null, { createNewLead })(CreateLead)

