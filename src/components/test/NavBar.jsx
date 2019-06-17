import React from 'react'
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div>
            <ul>
                <li><Link to="/">Page One</Link></li>
                <li><Link to="/pageTwo">Page Two</Link></li>
                <li></li>
            </ul>
        </div>
    )
}

export default NavBar