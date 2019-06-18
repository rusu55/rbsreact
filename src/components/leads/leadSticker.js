import React, { Fragment } from 'react'


const LeadSticker = () =>{
    return(
        <Fragment>
            <div class="col-xl-4">
							<div class="card">
								<div class="card-header">
									<div class="card-actions float-right">
										<div class="dropdown show">
											<a href="#" data-toggle="dropdown" data-display="static">
              <i class="align-middle" data-feather="more-horizontal"></i>
            </a>

											<div class="dropdown-menu dropdown-menu-right">
												<a class="dropdown-item" href="#">Action</a>
												<a class="dropdown-item" href="#">Another action</a>
												<a class="dropdown-item" href="#">Something else here</a>
											</div>
										</div>
									</div>
									<h5 class="card-title mb-0">Angelica Ramos</h5>
								</div>
								<div class="card-body">
									<div class="row no-gutters">
										<div class="col-sm-3 col-xl-12 col-xxl-3 text-center">
											<img src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" width="64" height="64" class="rounded-circle mt-2" alt="Angelica Ramos" />
										</div>
										<div class="col-sm-9 col-xl-12 col-xxl-9">
											<strong>About me</strong>
											<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
										</div>
									</div>

									<table class="table table-sm my-2">
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
												<td><span class="badge badge-success">Active</span></td>
											</tr>
										</tbody>
									</table>

									<hr />

									<strong>Activity</strong>

									<ul class="timeline mt-2 mb-0">
										<li class="timeline-item">
											<strong>Signed out</strong>
											<span class="float-right text-muted text-sm">30m ago</span>
											<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
										</li>
										<li class="timeline-item">
											<strong>Created invoice #1204</strong>
											<span class="float-right text-muted text-sm">2h ago</span>
											<p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
										</li>
										<li class="timeline-item">
											<strong>Discarded invoice #1147</strong>
											<span class="float-right text-muted text-sm">3h ago</span>
											<p>Nam pretium turpis et arcu. Duis arcu tortor, suscipit...</p>
										</li>
										<li class="timeline-item">
											<strong>Signed in</strong>
											<span class="float-right text-muted text-sm">3h ago</span>
											<p>Curabitur ligula sapien, tincidunt non, euismod vitae...</p>
										</li>
										<li class="timeline-item">
											<strong>Signed up</strong>
											<span class="float-right text-muted text-sm">2d ago</span>
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