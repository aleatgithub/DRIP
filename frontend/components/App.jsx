import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import Nav from './header/nav'
import { AuthRoute } from '../util/route_util';

import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

const App = () => (
  <div>
    <header className="header-container">
      <Nav/> 
      <GreetingContainer/>  
  
    </header>
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/"/>
    </Switch>
  </div>
)

export default App;