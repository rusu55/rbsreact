import React, {Fragment} from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


//Redux
import { Provider } from 'react-redux'
import store from './store'


import NavBar from './components/NavBar'
import TopNavBar from './components/TopNavBar'
import UserLogin from './components/auth/UserLogin'
import Home from './components/layout/Home'
import Alert from './components/commons/alert'
import UserRegister from './components/auth/UserRegister'
import Dashboard from './components/layout/dashboard/Dashboard'
import CreateProfile from './components/layout/dashboard/CreateProfile'
import EditProfile from './components/layout/dashboard/EditProfile'
import PrivateRoute from './components/commons/privateRoute'
import CreateLead from './components/leads/CreateLead'
import Leads from './components/leads/Leads'
import EditLead from './components/leads/EditLead'
import Profiles from './components/vendors/Profiles'
import Profile from './components/vendors/Profile'
import EditVendorProfile from './components/vendors/EditVendorProfile'
import AddVendorProfile from './components/vendors/AddVendorProfile'
import ToDos from './components/todo/ToDos'

function App() {
  return (
    <Provider store = {store}>
      <BrowserRouter>
        <Fragment>
        <ToastContainer />
            <div  className="wrapper"> 
              <NavBar />
              <div className="main">
                <TopNavBar />
                <Alert />           
                <Switch>
                  <Route path="/login" component={UserLogin} />
                  <Route path="/register" component={UserRegister} />               
                  <PrivateRoute path="/dashboard" component={Dashboard} />
                  <PrivateRoute path="/createProfile" component={CreateProfile} />
                  <PrivateRoute path="/editProfile/:id" component={EditProfile} /> 
                  <PrivateRoute path="/leads" component={Leads}  />  
                  <PrivateRoute path="/leadForm" component={CreateLead} />   
                  <PrivateRoute path="/editLead/:id" component={EditLead} />      
                  <PrivateRoute path="/vendors/:id" component={Profile} /> 
                  <PrivateRoute path="/vendors" component={Profiles} /> 
                  <PrivateRoute path="/vendors/editProfile/:id" component={EditVendorProfile} /> 
                  <PrivateRoute path="/vendors/addVendor" component={AddVendorProfile} /> 
                  <PrivateRoute path="/todos" component={ToDos} /> 
                  <Route exact path="/" component={UserLogin} />
                </Switch>
              </div>
          </div> 
      </Fragment>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
