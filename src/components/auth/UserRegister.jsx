import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Joi from 'joi-browser'
import PropTypes from 'prop-types'
import Form from '../commons/form'
import { setAlert } from '../../actions/alert'
import { registerUser } from '../../actions/auth'

class RegisterUser extends Form{
    state ={
        data: {
            name : "", email : "", password : "", confirmPassword : ""
        },
        errors: {}
    }

    schema = {
            name : Joi.string().min(5).max(100).required().label("Name"),
            email : Joi.string().min(6).max(100).email().required().label("Email"),
            password : Joi.string().min(6).max(50).required().label("Password"),
            confirmPassword :  Joi.any().valid(Joi.ref('password')).options({
                language: {
                  any: {
                    allowOnly: '!!Passwords do not match',
                  }
                } 
              }).required().label("Password")
    }
    doSubmit = () =>{
        const {name, email, password} = this.state.data
        this.props.registerUser({name, email, password})
    }

    render(){
        return(
           <Fragment>
               <h3>User Registration:</h3>
               <form onSubmit={this.handleSubmit}>
                    {this.renderInput("name", "Name")}
                    {this.renderInput("email", "Email")}
                    {this.renderInput("password", "Password", "password")}
                    {this.renderInput("confirmPassword", "Verify Password", "password")}
                    {this.renderButton("Register User")}
               </form>
           </Fragment>
        )
    }
}

RegisterUser.propTypes = {
    setAlert: PropTypes.func.isRequired,
    registerUser: PropTypes.func.isRequired
}

export default connect(null, {setAlert, registerUser})(RegisterUser)
