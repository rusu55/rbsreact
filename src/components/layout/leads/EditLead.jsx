import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Joi from 'joi-browser'
import Moment from 'moment'
import { withRouter } from 'react-router-dom'
import PropsTypes from 'prop-types'
import Form from '../../commons/form'

import { getLeadProfile, updateLeadProfile } from '../../../actions/leads'


class EditLead extends Form {
    state ={
        data: {
            name: "", email: "", phone: "", weddingDate: "", venue : ""
        },
        errors:{}
    }

    schema = {
        _id : Joi.string(),
        name: Joi.string().required().min(4).max(50).label("Name"),
        email: Joi.string().required().min(6).max(50).email().label("Email Address"),
        phone: Joi.string().allow(''),
        weddingDate: Joi.date().allow('').label('Wedding Date'),
        venue: Joi.string().allow('').label('Venue')
    }

    async componentDidMount(){
        
        await this.props.getLeadProfile(this.props.match.params.id)
        this.populateForm()
    }   


    populateForm = () =>{
        this.setState({data: this.mapToViewModel(this.props.leads.lead)})
    }
  
    mapToViewModel(lead){
       return {
            _id: lead._id,
            name: lead.name,
            email: lead.email,
            phone: lead.phone,
            weddingDate : Moment(lead.weddingDate).format('YYYY-MM-DD'),
            venue : lead.details.venue
       }
   }
   

    doSubmit = () =>{
       
        this.props.updateLeadProfile(this.state.data, this.props.leads.lead._id, this.props.history)
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
                    {this.renderInput("venue" , "Venue") }
                    {this.renderButton("Update Lead")}
                </form>
            </Fragment>
        )
    }
}

EditLead.propsTypes ={
    getLeadProfile: PropsTypes.func.isRequired,
    updateLeadProfile: PropsTypes.func.isRequired,
    lead: PropsTypes.object.isRequired
}

const mapStateToProps = state =>({
    leads : state.leads
})
export default connect(mapStateToProps, {getLeadProfile, updateLeadProfile})(withRouter(EditLead))