import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alert = ({alerts})=>{
    return(
        alerts !== null && alerts.length > 0 && alerts.map(alert =>(
            <div key={alert.id}>{alert.msg}</div>
        ))
        
    )
}

const mapStateToProps = state =>({
    alerts: state.alert
})



Alert.propTypes ={
    alerts: PropTypes.array.isRequired
}

export default connect(mapStateToProps)(Alert) 