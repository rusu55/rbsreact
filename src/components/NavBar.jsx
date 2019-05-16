import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () =>{
    return(
       <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">
                     RBS
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                 <span className="navbar-toggler-icon" />
          </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav">
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Login">
           Login
          </NavLink>   
          <NavLink className="nav-item nav-link" to="/register">
           Register
          </NavLink>   
        </div>
      </div>
    </nav>

    )
}

export default NavBar