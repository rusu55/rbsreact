import React, {useEffect, useState, Fragment} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import Spinner from '../commons/spinner'
import ToDoTable from './ToDoTable'
import ToDoSticker from './ToDoSticker'

const ToDos = () =>{
   const [completed, setCompleted] = useState(0)
    useEffect(()=>{},[])
    const handleClick =(item) =>{
        console.log('Clicked!')
        completed === 0 ? setCompleted(1) : setCompleted(0)
        
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
                                                    <ToDoTable onCompleted={handleClick} completed={completed} />
										</div>
									</div>
								</div>								
							</div>
						</div>
                       <ToDoSticker />
					</div>
                </div>
            </main>            
             
        </Fragment>
    )
}

ToDos.propTypes ={

}

const mapStateToProps = state =>({

})
export default connect(mapStateToProps, {})(ToDos)