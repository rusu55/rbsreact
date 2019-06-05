import React , { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'

const NavBar = ({ auth: {isAuthenticated, loading}, logout}) =>{
    // / console.log(loading)
    const authLinks = (
      <Fragment>
           <NavLink className="nav-item nav-link" to="/leads" >Leads</NavLink>
           <NavLink className="nav-item nav-link" to="/vendors" >Venors</NavLink>
           <NavLink className="nav-item nav-link" to="/dashboard" >User Profile</NavLink>
           <NavLink onClick={logout} className="nav-item nav-link" to="/">Logout</NavLink>          
      </Fragment>     
    )
    const guestLinks = (
      <Fragment>
          <NavLink className="nav-item nav-link" to="/">
            Home
          </NavLink>
          <NavLink className="nav-item nav-link" to="/Login">
          Login
          </NavLink>   
          <NavLink className="nav-item nav-link" to="/register">
          Register
          </NavLink>  
      </Fragment>
      
    )

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
          { isAuthenticated ? authLinks : guestLinks}          
        </div>
      </div>
    </nav>

    )
}
NavBar.propTypes ={
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
}

const mapStateToProps = state =>({
  auth: state.auth
})
export default connect(mapStateToProps, { logout })(NavBar)