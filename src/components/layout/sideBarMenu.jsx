import React, { Fragment }  from 'react'
import { Link } from 'react-router-dom'

const SideBarMenu = () =>{
    return(
        <Fragment>
                <div className="col-md-3 col-xl-2">

<div className="card">
    <div className="card-header">
        <h5 className="card-title mb-0">Profile Settings</h5>
    </div>

    <div className="list-group list-group-flush" role="tablist">
        <Link className="list-group-item list-group-item-action active" data-toggle="list" to="#account" role="tab">
Account
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#password" role="tab">
Password
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#" role="tab">
Privacy and safety
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#" role="tab">
Email notifications
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#" role="tab">
Web notifications
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#" role="tab">
Widgets
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#" role="tab">
Your data
</Link>
        <Link className="list-group-item list-group-item-action" data-toggle="list" to="#" role="tab">
Delete account
</Link>
    </div>
</div>
</div>
        </Fragment>
    )
}

export default SideBarMenu
