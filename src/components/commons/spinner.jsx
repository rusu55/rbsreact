import React, { Fragment } from 'react'

const Spinner = () =>{
    return(
        <Fragment>
            <div className="d-flex justify-content-center">
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </div>
        </Fragment>
    )
}
export default Spinner