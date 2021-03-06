import React, { Component } from 'react'
import Joi from 'joi-browser'

import Input from './input'

class Form extends Component{
    state = {
        data:{}, errors:{}
    }

    validate = () =>{
        const options  = {abortEarly: false}
        const { error } = Joi.validate(this.state.data, this.schema, options)
        
        if(!error) return null

        const errors = {}
        for(let item of error.details) errors[item.path[0]] = item.message
        return errors
    }

    handleChange = ({currentTarget: input}) =>{
        const data = {...this.state.data}
        data[input.name] = input.value
        this.setState({data})
      }

      handleSubmit = e =>{
        e.preventDefault()
        const errors = this.validate()
       console.log(errors)
        this.setState({ errors: errors || {} });
        if (errors) return;
        
        this.doSubmit();
    }

    renderInput(name, label, classStyle, type="text"){
        const {data, errors} = this.state

        return(
            <Input 
                type={type}
                classStyle = {classStyle}
                name={name}
                value={data[name]}
                label={label}
                onChange={this.handleChange}
                error = {errors[name]}
            />
        )
    }

    renderButton(label){
            return(
                <button type="submit" className="btn btn-primary">{label}</button>
            )
    }

}
export default Form