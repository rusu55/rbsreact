import React, { Fragment } from 'react'
import Joi from 'joi-browser'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Form from '../commons/form'
import {createNewTask} from '../../actions/tasks'


class ToDoSticker extends Form {
	state = {
		data: {
			taskDate: "", description: ""
		},
		errors: {}
	}

	schema = {
        taskDate: Joi.string().required().label("Date"),
        description: Joi.string().required().min(6).max(255).label("Description"),
    }

	doSubmit = () =>{     		
        this.props.createNewTask(this.state.data)        
    }

	render(){
		return(
			<Fragment>
				<div className="col-xl-4">
								<div className="card">
									<div className="card-header">									
										<h5 className="card-title mb-0">New To Do</h5>
									</div>
									<div className="card-body">
										<form onSubmit={this.handleSubmit}>
											
											    {this.renderInput("description" , "description",  "form-group") }
												{this.renderInput("taskDate" , "Todo Date", "form-group","date") }
												{this.renderButton("Add Todo" ,"btn btn-primary")}											
										</form>
										<hr />
	
										<strong>Activity</strong>
	
										<ul className="timeline mt-2 mb-0">
											<li className="timeline-item">
												<strong>Signed out</strong>
												<span className="float-right text-muted text-sm">30m ago</span>
												<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
											</li>
											<li className="timeline-item">
												<strong>Created invoice #1204</strong>
												<span className="float-right text-muted text-sm">2h ago</span>
												<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
											</li>
											<li className="timeline-item">
												<strong>Discarded invoice #1147</strong>
												<span className="float-right text-muted text-sm">3h ago</span>
												<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
											</li>
											<li className="timeline-item">
												<strong>Signed in</strong>
												<span className="float-right text-muted text-sm">3h ago</span>
												<p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
											</li>
											<li className="timeline-item">
												<strong>Signed up</strong>
												<span className="float-right text-muted text-sm">2d ago</span>
												<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
											</li>
										</ul>
	
									</div>
								</div>
							</div>
			</Fragment>)
	}
}

ToDoSticker.propTypes = {

}

export default connect(null, {createNewTask})(ToDoSticker)