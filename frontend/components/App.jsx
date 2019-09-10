import React from 'react';
import GreetingContainer from "./greeting/greeting_container";
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
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
    <header>
      <h1>  DRIP (💧must we be the phantomsss 🐱🐁 👻 🐸 )</h1>
      <GreetingContainer/>
    </header>
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <Route exact path="/"/>
  </div>
)

export default App;