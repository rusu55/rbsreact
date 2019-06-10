import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import Joi from 'joi-browser'
import Moment from 'moment'
import { withRouter } from 'react-router-dom'
import PropsTypes from 'prop-types'
import Form from '../../commons/form'

import { getLeadProfile, updateLeadProfile } from '../../../actions/leads'
import SideBarMenu from '../sideBarMenu';

class EditLead extends Form {
    state ={
        data: {
            name: "", email: "", phone: "", weddingDate: "", venue : ""
        },
        errors:{}
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
								<div className="tab-pane fade show active" id="account" role="tabpanel">

									<div className="card">
										<div className="card-header">
											<div className="card-actions float-right">
												<div className="dropdown show">
													<a href="#" data-toggle="dropdown" data-display="static">
                                                        <i className="align-middle" data-feather="more-horizontal"></i>
                                                    </a>

													<div className="dropdown-menu dropdown-menu-right">
														<a className="dropdown-item" href="#">Action</a>
														<a className="dropdown-item" href="#">Another action</a>
														<a className="dropdown-item" href="#">Something else here</a>
													</div>
												</div>
											</div>
											<h5 className="card-title mb-0">Public info</h5>
										</div>
										<div className="card-body">
											<form>
												<div className="row">
													<div className="col-md-8">
														<div className="form-group">
															<label for="inputUsername">Username</label>
															<input type="text" className="form-control" id="inputUsername" placeholder="Username" />
														</div>
														<div className="form-group">
															<label for="inputUsername">Biography</label>
															<textarea rows="2" className="form-control" id="inputBio" placeholder="Tell something about yourself"></textarea>
														</div>
													</div>
													<div className="col-md-4">
														<div className="text-center">
															<img alt="Chris Wood" src="img/avatars/avatar.jpg" className="rounded-circle img-responsive mt-2" width="128" height="128" />
															<div className="mt-2">
																<span className="btn btn-primary"><i className="fas fa-upload"></i> Upload</span>
															</div>
															<small>For best results, use an image at least 128px by 128px in .jpg format</small>
														</div>
													</div>
												</div>

												<button type="submit" className="btn btn-primary">Save changes</button>
											</form>

										</div>
									</div>

									<div className="card">
										<div className="card-header">
											<h5 className="card-title mb-0">Private info</h5>
										</div>
										<div className="card-body">
                                             <form >
												<div className="form-row">
                                                  {this.renderInput("firstname" , "First Name",  "form-group col-md-6") } 
                                                  {this.renderInput("lastname" , "Last Name", "col-md-6") } 													
												</div>
												{this.renderInput("email" , "Email Address", "form-group") }
                                                {this.renderInput("phone" , "Phone Number", "form-group") }
                                                {this.renderInput("weddingDate" , "Wedding Date", "form-group","date") }
                                                {this.renderInput("venue" , "Venue", "form-group") }					
												{this.renderButton("Update Lead" ,"form-group")}
											</form>

										</div>
									</div>

								</div>
								<div className="tab-pane fade" id="password" role="tabpanel">
									<div className="card">
										<div className="card-body">
											<h5 className="card-title">Password</h5>

											<form>
												<div className="form-group">
													<label for="inputPasswordCurrent">Current password</label>
													<input type="password" className="form-control" id="inputPasswordCurrent" />
													<small><a href="#">Forgot your password?</a></small>
												</div>
												<div className="form-group">
													<label for="inputPasswordNew">New password</label>
													<input type="password" className="form-control" id="inputPasswordNew" />
												</div>
												<div className="form-group">
													<label for="inputPasswordNew2">Verify password</label>
													<input type="password" className="form-control" id="inputPasswordNew2" />
												</div>
												<button type="submit" className="btn btn-primary">Save changes</button>
											</form>

										</div>
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

EditLead.propsTypes ={
    getLeadProfile: PropsTypes.func.isRequired,
    updateLeadProfile: PropsTypes.func.isRequired,
    lead: PropsTypes.object.isRequired
}

const mapStateToProps = state =>({
    leads : state.leads
})
export default connect(mapStateToProps, {getLeadProfile, updateLeadProfile})(withRouter(EditLead))