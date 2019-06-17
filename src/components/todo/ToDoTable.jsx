import React from 'react'
import PropTypes from 'prop-types'

const ToDoTable = ({onCompleted, completed, tasks}) =>{
   
    return(
        <table id="datatables-basic" className="table table-striped">
          <tbody>
                     {tasks.map(task => (
                           <tr key={task._id}>
                           <td><span className='badge badge-warning'>23 Mat</span></td>
                           <td>
                              {task.finished && task.finished === true ? ( <del>{task.description} </del>) : 
                              (<span>{task.description}</span>)}                             
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