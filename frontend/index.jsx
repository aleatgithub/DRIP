import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"
import { login, signup, logout } from './actions/session_actions';
import { fetchSneakers, fetchSneaker } from "./util/sneakers_api_util"

document.addEventListener("DOMContentLoaded", () => {
  let store;

  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  //testing
  // window.fetchSneakers = fetchSneakers;
  // window.fetchSneaker = fetchSneaker;
  window.getState = store.getState;
  window.store = store;
  
  //end of testing
  
  const root = document.getElementById("root");
  ReactDOM.render(<Root store={store}/>, root)
}) 

