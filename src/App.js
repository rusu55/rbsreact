import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Redux
import { Provider } from 'react-redux'
import store from './store'


import './App.css';

import NavBar from './components/NavBar'
import UserLogin from './components/auth/UserLogin'
import Home from './components/layout/Home'
import Alert from './components/commons/alert'
import UserRegister from './components/auth/UserRegister'
import Dashboard from './components/layout//dashboard/Dashboard'
import CreateProfile from './components/layout/dashboard/CreateProfile'
import PrivateRoute from './components/commons/privateRoute'

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Fragment>
        <ToastContainer />
          <NavBar />
            <main  className="container"> 
              <Alert />           
              <Switch>
                <Route path="/login" component={UserLogin} />
                <Route path="/register" component={UserRegister} />               
                <PrivateRoute path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/createProfile" component={CreateProfile} />
                <Route  path="/" component={Home} />
              </Switch>
          </main> 
      </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
