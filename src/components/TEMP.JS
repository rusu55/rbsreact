<nav className="navbar navbar-expand navbar-light bg-white">
                <Link  className="sidebar-toggle d-flex mr-2">
                <i className="hamburger align-self-center"></i>
                </Link>
                <form className="form-inline d-none d-sm-inline-block">
					<input class="form-control form-control-no-border mr-sm-2" type="text" placeholder="Search projects..." aria-label="Search" />
				</form>
                <div className="navbar-collapse collapse">
                <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
							<Link className="nav-icon dropdown-toggle d-inline-block d-sm-none" to="#" data-toggle="dropdown">
                <i className="align-middle" data-feather="settings"></i>
              </Link>

							<Link className="nav-link dropdown-toggle d-none d-sm-inline-block" to="#" data-toggle="dropdown">
                <img src="img/avatars/avatar.jpg" className="avatar img-fluid rounded-circle mr-1" alt="Chris Wood" /> <span className="text-dark">Chris Wood</span>
              </Link>
							<div className="dropdown-menu dropdown-menu-right">
								<Link className="dropdown-item" to="pages-profile.html"><i className="align-middle mr-1" data-feather="user"></i> Profile</Link>
								<Link className="dropdown-item" to="#"><i className="align-middle mr-1" data-feather="pie-chart"></i> Analytics</Link>
								<div className="dropdown-divider"></div>
								<Link className="dropdown-item" to="pages-settings.html">Settings & Privacy</Link>
								<Link className="dropdown-item" to="#">Help</Link>
								<Link className="dropdown-item" to="#">Sign out</Link>
							</div>
						</li>
                </ul>
                </div>
        </nav>