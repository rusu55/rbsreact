import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'


import './App.css';

import NavBar from './components/NavBar'
import UserLogin from './components/UserLogin'
import Home from './components/Home'

function App() {
  return (
    <BrowserRouter>
       <Fragment>
        <NavBar />
          <main  className="container">            
            <Switch>
              <Route path="/login" component={UserLogin} />
              <Route  path="/" exact component={Home} />
            </Switch>
        </main> 
    </Fragment>
    </BrowserRouter>
  );
}

export default App;
