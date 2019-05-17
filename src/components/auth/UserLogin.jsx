import React, { Fragment} from 'react'
import { Redirect } from 'react-router-dom'
import Joi from 'joi-browser'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { setAlert} from '../../actions/alert'
import { login } from '../../actions/auth'

import Form from '../commons/form'


class UserLogin extends Form{
    state ={
       data: {
           email: "", password: ""
       },
       errors: {}  
    }

    schema = {
        email: Joi.string()
          .required()
          .label("Email")
          .email(),
        password: Joi.string()
          .required()
          .label("Password")
      };


   doSubmit = () =>{
       const { email, password } = this.state.data
       this.props.login({ email, password})
   }  

    render(){
        if(this.props.isAuthenticated){
            return <Redirect to='/dashboard' />
        }
        return(
            <Fragment>
                 <form onSubmit={this.handleSubmit}>
                        {this.renderInput("email", "Email")}
                        {this.renderInput("password", "Password", "password")}   
                        {this.renderButton("Login")}
                 </form>
            </Fragment>
        )
    }
}

const mapStateToProps = state =>({
    isAuthenticated: state.auth.isAuthenticated
})

UserLogin.propTypes = {
    setAlert: PropTypes.func.isRequired,
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
}

export default connect(mapStateToProps, { setAlert , login})(UserLogin)