import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Joi from 'joi-browser'
import PropsTypes from 'prop-types'
import Form from '../../commons/form'

import { getLeadProfile } from '../../../actions/leads'


class EditLead extends Form {
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

    componentDidMount(){
        this.props.getLeadProfile(this.props.match.params.id)
        this.populateForm()
    }

    populateForm = () =>{
        const {lead, loading } = this.props.leads
    }

   

    doSubmit = () =>{
        
    }

    render(){
        return(
            <Fragment>
                <h1>Edit Lead</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name" , "Name") }
                    {this.renderInput("email" , "Email Address") }
                    {this.renderInput("phone" , "Phone Number") }
                    {this.renderInput("weddingDate" , "Wedding Date", "date") }
                    {this.renderButton("Update Lead")}
                </form>
            </Fragment>
        )
    }
}

EditLead.propsTypes ={
    getLeadProfile: PropsTypes.func.isRequired,
    lead: PropsTypes.object.isRequired
}

const mapStateToProps = state =>({
    leads : state.leads
})
export default connect(mapStateToProps, {getLeadProfile})(EditLead)