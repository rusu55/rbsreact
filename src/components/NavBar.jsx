import React , { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'

const NavBar = ({ auth: {isAuthenticated, loading}, logout}) =>{
    
    const authLinks = (<Fragment>
                         <nav className="sidebar">
                                    <div className="sidebar-content ">
                                            <Link className="sidebar-brand" href="index.html">
                                                <i className="align-middle" data-feather="box"></i>
                                                <span className="align-middle">Red Bank Studio</span>
                                            </Link>

                                        <ul className="sidebar-nav">
                                            <li className="sidebar-header">
                                                Main
                                            </li>
                                            <li className="sidebar-item">
                                                <NavLink className="sidebar-link" to="/leads">
                                                    <i className="align-middle" data-feather="book-open"></i> <span className="align-middle">Leads</span>
                                                </NavLink>
                                            </li>				
                                        </ul>
                                    </div>
                            </nav>
                    </Fragment>)
    const navBarNotLoged = ( <p></p>)
    return(
        <Fragment>{ isAuthenticated ? authLinks : navBarNotLoged}  </Fragment>
               
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