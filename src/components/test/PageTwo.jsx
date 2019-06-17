import React from 'react'

class PageTwo extends React.Component {
    componentDidMount(){
        console.log('Page TWO Remounted')
    }
    render(){
        return(
            <h1>Page TWO</h1>
        )
    }
}

export default PageTwo