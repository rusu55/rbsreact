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
                <div className="main d-flex w-100">
                    <div className="container d-flex flex-column">
                        <div className="row h-100">
                            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                                <div className="d-table-cell align-middle">

                                    <div className="text-center mt-4">
                                        <h1 className="h2">Welcome back</h1>
                                        <p className="lead">
                                            Sign in to your account to continue
                                        </p>
                                    </div>

                                    <div className="card">
                                        <div className="card-body">
                                            <div className="m-sm-4">
                                            
                                                <form onSubmit={this.handleSubmit}>
                                                        {this.renderInput("email", "Email")}
                                                        {this.renderInput("password", "Password", "password")}   
                                                        {this.renderButton("Login")}
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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