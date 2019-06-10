import React from 'react'

const Input = ({ name, label, error, ...rest })  =>{
    return(
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input {...rest} name={name} className="form-control form-control-lg" id={name}/>
            {error && <div className="alert alert-danger">{error}</div> }          
        </div>
    )
}

export default Input