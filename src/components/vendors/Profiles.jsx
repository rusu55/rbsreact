import React, {Fragment, useEffect} from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import ProfileItem from './ProfileItem'

const Profiles = (props) =>{
    return(
        <Fragment>
            <ProfileItem />
        </Fragment>
    )
}

Profiles.propTypes ={

}

const mapStateToProps = state =>({

})

export default connect(mapStateToProps, {})(Profiles)