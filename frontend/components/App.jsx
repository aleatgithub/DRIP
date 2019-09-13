import React from 'react';
import Header from "./header/header_container";
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import { AuthRoute } from '../util/route_util';
import Footer from './footer/footer';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
 <div className="master-div">
    <header className="header-container">
      <Header/>  
    </header>
    
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/"/>
    </Switch>
    
    <footer>
      <Footer/>
    </footer>
  </div>
)

export default App;