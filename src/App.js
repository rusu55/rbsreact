import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

//Redux
import { Provider } from 'react-redux'
import store from './store'


import './App.css';

import NavBar from './components/NavBar'
import UserLogin from './components/auth/UserLogin'
import Home from './components/layout/Home'
import Alert from './components/commons/alert'
import UserRegister from './components/auth/UserRegister'

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Fragment>
          <NavBar />
            <main  className="container"> 
              <Alert />           
              <Switch>
                <Route path="/login" component={UserLogin} />
                <Route path="/register" component={UserRegister} />
                <Route  path="/" component={Home} />
              </Switch>
          </main> 
      </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
