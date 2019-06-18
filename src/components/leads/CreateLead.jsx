import React, { Fragment} from 'react'
import PropTypes from 'prop-types'
import Joi from 'joi-browser'
import { withRouter } from 'react-router-dom'

import { connect } from 'react-redux'
import { createNewLead } from '../../actions/leads'

import Form from '../commons/form'
import SideBarMenu from '../layout/sideBarMenu';


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
        weddingDate: Joi.date().allow(''),
        venue: Joi.string().allow('')
    }

     doSubmit = () =>{     
        this.props.createNewLead( this.state.data, this.props.history)        
    }

    render(){
        return(
            <Fragment>
                 <main className="content">
				    <div className="container-fluid p-0">
                    <h1 className="h3 mb-3">Edit Lead Profile</h1>
                        <div className="row">
                            <div className="col-md-9 col-xl-10">
                                <div className="tab-content">
                                <div className="card">
										<div className="card-header">
											<h5 className="card-title mb-0">Private info</h5>
										</div>
										<div className="card-body">
                                             <form onSubmit={this.handleSubmit}>
												
                                                {this.renderInput("name" , "Name",  "form-group") }                                                   																									
												{this.renderInput("email" , "Email Address", "form-group") }
                                                {this.renderInput("phone" , "Phone Number", "form-group") }
                                               
                                                <div className="form-row">
                                                  {this.renderInput("weddingDate" , "Wedding Date", "form-group col-md-4","date") }
                                                  {this.renderInput("venue" , "Venue", "form-group col-md-8") }					
                                                </div>
                                                {this.renderButton("Add Lead" ,"form-group")}
											</form>

										</div>
									</div>
                                </div>
                            </div>
                        <SideBarMenu />
                        </div>
                    </div>
                </main>                
            </Fragment>
        )
    }
}

CreateLead.propTypes ={
    createNewLead : PropTypes.func.isRequired
}

export default connect(null, { createNewLead })(withRouter(CreateLead))

