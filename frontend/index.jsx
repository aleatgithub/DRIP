import React from "react";
import ReactDOM from "react-dom";
//testing
import { signup, login, logout } from './util/session_api_util';
import configureStore from "./store/store";


document.addEventListener("DOMContentLoaded", () => {
  //testing 
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  //end of testing
  const store = configureStore();

  window.getState = store.getState; 
  window.dispatch = store.dispatch;
  
  const root = document.getElementById("root");
  ReactDOM.render(<h1> 💧do you have the DRIP? 🌈 💧 🐸 </h1>, root)
})

