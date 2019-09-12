import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import { AuthRoute } from '../util/route_util';
// import Footer from './footer/footer';
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
      <GreetingContainer/>  
    </header>
    
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route exact path="/"/>
    </Switch>
    
    <footer>
      {/* <FooterComponent/> */}
    </footer>
  </div>
)

export default App;