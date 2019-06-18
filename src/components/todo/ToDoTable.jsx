import React from 'react'
import Moment from 'moment'
import PropTypes from 'prop-types'
import { timeDifference } from '../utils/TimeDifference'

const ToDoTable = ({onCompleted, completed, tasks}) =>{
   console.log(completed)
    return(
        <table id="datatables-basic" className="table table-striped">
          <tbody>
                     {tasks.map(task => (
                            //console.log(timeDifference(task.taskDate))
                           <tr key={task._id}>
                           <td><span className={ timeDifference(task.taskDate) > 30 || timeDifference(task.taskDate) < -30 ? 'badge badge-danger' : 'badge badge-success' }>
                           {Moment(task.taskDate).format('MMMM Do')}
                           </span></td>
                           <td>
                               {completed.findIndex(obj => obj === task._id) > -1 ? (<del>{task.description}</del>) : (<span>{task.description}</span>)}                            
                           </td>
                           <td><input onClick={()=>onCompleted(task._id)} type="checkbox" className="form-control-lg" /></td>                           
                        </tr>
                     ))}
                        
                                  
        </tbody>
    </table>
    )
}

ToDoTable.propTypes ={

}

export default ToDoTable