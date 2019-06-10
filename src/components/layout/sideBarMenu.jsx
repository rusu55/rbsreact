import React, { Fragment }  from 'react'

const SideBarMenu = () =>{
    return(
        <Fragment>
                <div className="col-md-3 col-xl-2">

<div className="card">
    <div className="card-header">
        <h5 className="card-title mb-0">Profile Settings</h5>
    </div>

    <div className="list-group list-group-flush" role="tablist">
        <a className="list-group-item list-group-item-action active" data-toggle="list" href="#account" role="tab">
Account
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#password" role="tab">
Password
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab">
Privacy and safety
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab">
Email notifications
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab">
Web notifications
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab">
Widgets
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab">
Your data
</a>
        <a className="list-group-item list-group-item-action" data-toggle="list" href="#" role="tab">
Delete account
</a>
    </div>
</div>
</div>
        </Fragment>
    )
}

export default SideBarMenu
