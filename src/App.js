import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import PageOne from './components/test/PageOne'
import PageTwo from './components/test/PageTwo'
import NavBar from './components/test/NavBar'

const App = () =>{
    return(
        <div>
            <BrowserRouter>
                <div>
                    <NavBar></NavBar>
                    <Switch>
                    <Route path="/" exact component={PageOne} />
                    <Route path="/pageTwo" component={PageTwo} />
                    </Switch>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App