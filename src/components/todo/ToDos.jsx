import React, {useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../commons/spinner'
import ToDoTable from './ToDoTable'
import ToDoSticker from './ToDoSticker'
import { getTasks, SetTask } from '../../actions/tasks'

const ToDos = ({ auth, tasks: {loading, tasks, finished}, getTasks, SetTask }) =>{
   
    useEffect(()=>{getTasks()},[])
    
    const handleClick =(item) =>{
      
        SetTask(item)
       
        
    }

    const addToDo = (data) => {
            console.log(data)
    }

    return(
        <Fragment>
            <main className="content">
				<div className="container-fluid p-0">
                <h1 className="h3 mb-3">To Do List</h1>
                <div className="row">
						<div className="col-xl-8">
							<div className="tab-content">
								<div className="tab-pane fade show active" id="account" role="tabpanel">								
									<div className="card">
										<div className="card-body">  
                                        {loading ? <Spinner />: (
                                                <Fragment>
                                                    {tasks.length > 0 ? (
                                                        <ToDoTable onCompleted={handleClick} completed={finished} tasks={tasks}/>
                                                    ) : (<h1>No Tasks!</h1>)}
                                                   
                                                </Fragment>
                                            )}                                 
                                                   
										</div>
									</div>
								</div>								
							</div>
						</div>
                       <ToDoSticker/>
					</div>
                </div>
            </main>            
             
        </Fragment>
    )
}

ToDos.propTypes ={

}

const mapStateToProps = state =>({
        auth : state.auth,
        tasks : state.task
})
export default connect(mapStateToProps, {getTasks, SetTask})(ToDos)