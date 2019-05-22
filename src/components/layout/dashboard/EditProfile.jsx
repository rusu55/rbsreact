import React, { Fragment } from 'react'
import Form from '../../commons/form'
import Joi from 'joi-browser'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'

import { editUserProfile, getUserProfile } from '../../../actions/userProfile'

class EditProfile extends Form{
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
    
    componentDidMount(){
        const { profile, loading } = this.props.userProfile
        console.log(profile)
        const data = profile
        this.setState({data})
    }
    doSubmit = () =>{
       // console.log(this.state.data)
        this.props.editUserProfile(this.state.data, this.props.history)
    }
    
    render(){
        
        //console.log(profile.company)
        return(
            <Fragment>
               <h1>Edit Profile</h1> 
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

EditProfile.propTypes = {
    editUserProfile : PropTypes.func.isRequired,
    getUserProfile: PropTypes.func.isRequired,
    userProfile: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
    userProfile: state.userProfile
})

export default connect(mapStateToProps, {editUserProfile, getUserProfile})(withRouter(EditProfile))