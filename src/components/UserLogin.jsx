import React, { Fragment} from 'react'
import Joi from 'joi-browser'

import Form from './commons/form'

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
       console.log('Submited')
   }  

    render(){
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

export default UserLogin