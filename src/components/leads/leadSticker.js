import React, { Fragment } from 'react'


const LeadSticker = () =>{
    return(
        <Fragment>
            <div className="col-xl-4">
							<div className="card">
								<div className="card-header">
									<h5 className="card-title mb-0">Angelica Ramos</h5>
								</div>
								<div className="card-body">
									<div className="row no-gutters">
										<div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
											<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" width="64" height="64" className="rounded-circle mt-2" alt="Angelica Ramos" />
										</div>
										<div className="col-sm-9 col-xl-12 col-xxl-9">
											<strong>About me</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									</div>

									<table className="table table-sm my-2">
										<tbody>
											<tr>
												<th>Name</th>
												<td>Angelica Ramos</td>
											</tr>
											<tr>
												<th>Company</th>
												<td>The Wiz</td>
											</tr>
											<tr>
												<th>Email</th>
												<td>angelica@ramos.com</td>
											</tr>
											<tr>
												<th>Phone</th>
												<td>+1234123123123</td>
											</tr>
											<tr>
												<th>Status</th>
												<td><span className="badge badge-success">Active</span></td>
											</tr>
										</tbody>
									</table>

									<hr />

									<strong>Activity</strong>

									<ul className="timeline mt-2 mb-0">
										<li className="timeline-item">
											<strong>Signed out</strong>
											<span className="float-right text-muted text-sm">30m ago</span>
											<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
										</li>
										<li className="timeline-item">
											<strong>Created invoice #1204</strong>
											<span className="float-right text-muted text-sm">2h ago</span>
											<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
										</li>
										<li className="timeline-item">
											<strong>Discarded invoice #1147</strong>
											<span className="float-right text-muted text-sm">3h ago</span>
											<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
										</li>
										<li className="timeline-item">
											<strong>Signed in</strong>
											<span className="float-right text-muted text-sm">3h ago</span>
											<p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
										</li>
										<li className="timeline-item">
											<strong>Signed up</strong>
											<span className="float-right text-muted text-sm">2d ago</span>
											<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
										</li>
									</ul>

								</div>
							</div>
						</div>
        </Fragment>
    )
}

export default LeadSticker