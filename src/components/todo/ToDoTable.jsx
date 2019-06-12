import React from 'react'
import PropTypes from 'prop-types'

const ToDoTable = ({onCompleted, completed}) =>{
    return(
        <table id="datatables-basic" className="table table-striped">
          <tbody>
           
                        <tr>
                           <td><span className='badge badge-warning'>23 Mat</span></td>
                           <td>
                              {completed === 1 ? ( <del>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor metus. </del>) : 
                              (<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor metus.</span>)}                             
                           </td>
                           <td><input onClick={()=>onCompleted()} type="checkbox" className="form-control-lg" /></td>                           
                        </tr>
                        <tr>
                           <td><span className='badge badge-success'>23 Jun</span></td>
                           <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor metus. </td>
                           <td><input type="checkbox" className="form-control-lg" /></td>                           
                        </tr>
                        <tr>
                           <td>23 Jun</td>
                           <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor metus. </td>
                           <td><input type="checkbox" className="form-control-lg" /></td>                           
                        </tr>
                        <tr>
                           <td>23 Jun</td>
                           <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor metus. </td>
                           <td><input type="checkbox" className="form-control-lg" /></td>                           
                        </tr>
                        <tr>
                           <td>23 Jun</td>
                           <td>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel porttitor metus. </td>
                           <td><input type="checkbox" className="form-control-lg" /></td>                           
                        </tr>                            
        </tbody>
    </table>
    )
}

ToDoTable.propTypes ={

}

export default ToDoTable