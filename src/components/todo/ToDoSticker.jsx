import React, { Fragment } from 'react'


const ToDoSticker = () =>{
    return(
        <Fragment>
            <div class="col-xl-4">
							<div class="card">
								<div class="card-header">									
									<h5 class="card-title mb-0">New To Do</h5>
								</div>
								<div class="card-body">
									<from>
                                    <div className="form-group">
											<label for="inputUsername">To Do</label>
												<textarea rows="2" className="form-control" id="inputBio" placeholder="Tell something about yourself"></textarea>
											</div>
                                        <div className="form-group">
                                            <label htmlFor="Date">YYYY/MM/DD</label>
                                            <input name="date" className="form-control" type="date" />                                                     
                                        </div>
                                        <button type="submit" className="btn btn-primary">Save changes</button>
                                    </from>
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

export default ToDoSticker