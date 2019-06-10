import React , { Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'

const NavBar = ({ auth: {isAuthenticated, loading}, logout}) =>{
    return(
        <nav className="sidebar">
                <div className="sidebar-content ">
                        <a className="sidebar-brand" href="index.html">
                            <i className="align-middle" data-feather="box"></i>
                            <span className="align-middle">Red Bank Studio</span>
                        </a>

                    <ul className="sidebar-nav">
                        <li className="sidebar-header">
                            Main
                        </li>
                        <li className="sidebar-item">
                            <a href="#dashboards" data-toggle="collapse" className="sidebar-link collapsed">
                                <i className="align-middle" data-feather="sliders"></i> <span className="align-middle">Dashboard</span>
                            </a>
                            <ul id="dashboards" className="sidebar-dropdown list-unstyled collapse ">
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-default.html">Default</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-analytics.html">Analytics</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-e-commerce.html">E-commerce</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-social.html">Social</a></li>
                                <li className="sidebar-item"><a className="sidebar-link" href="dashboard-crypto.html">Crypto <span className="sidebar-badge badge badge-primary">New</span></a></li>
                            </ul>
                        </li>
                        <li className="sidebar-item">
                            <a className="sidebar-link" href="documentation.html">
                                 <i className="align-middle" data-feather="book-open"></i> <span className="align-middle">Documentation</span>
                            </a>
                        </li>				
                    </ul>
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