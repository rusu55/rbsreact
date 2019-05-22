import React, { Fragment } from 'react'
import Form from '../../commons/form'
import Joi from 'joi-browser'
import { connect } from 'react-redux'

import { createNewProfile } from '../../../actions/userProfile'

class CreateProfile extends Form{
    state ={
        data:{
            company : "",
            website: "",
            phone: "",
            youtube: "",
            facebook : "",
            instagram : ""
        },
        errors: {}
    }

    schema ={
        company: Joi.string().required(),
        website: Joi.string().required().min(6).max(50),
        phone: Joi.string().required().label('Phone'),
        youtube: Joi.string().required(),
       facebook: Joi.string().required(),
       instagram: Joi.string().required()
    }

    doSubmit = () =>{
       // console.log(this.state.data)
        this.props.createNewProfile(this.state.data)
    }


    render(){
        return(
            <Fragment>
               <h1>Create Profile</h1> 
               <form onSubmit={this.handleSubmit}>
                  {this.renderInput("company", "Company")}
                  {this.renderInput("website" , "Website")}
                  {this.renderInput("phone", "Phone")}
                  {this.renderInput("youtube", "Youtube")}
                  {this.renderInput("facebook", "Facebook")}
                  {this.renderInput("instagram", "Instagram")}
                  {this.renderButton("Regster Profile")}
               </form>
            </Fragment>
        )
    }
}

export default connect(null, {createNewProfile})(CreateProfile)