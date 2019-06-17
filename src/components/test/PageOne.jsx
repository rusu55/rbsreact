import React from 'react'

class PageOne extends React.Component {
    componentDidMount(){
        console.log('Page One Remounted')
    }
    render(){
        return(
            <h1>Page One</h1>
        )
    }
}

export default PageOne