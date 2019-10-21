import React from 'react';
import Header from "./header/header_container";
import SignupFormContainer from './session_forms/signup_form_container';
import LoginFormContainer from './session_forms/login_form_container';
import SneakerIndexContainer from './sneaker/sneaker_index_container';
import SneakerShowContainer from './sneaker/sneaker_show_container';
import ListingShowContainer from './listing/listing_show_container';
import CartItemsContainer from './cart/cart_items_container';
import SearchContainer from './search/search_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Styles from './styles/styles';
import Footer from './footer/footer';
import Home from './home/home';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';



const App = () => (

  <div>
    <header id="transformable">
      <Header/> 
    </header>


    <main> 
    <Switch>
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <Route path="/sneakers/:sneakerId/listings" component={SneakerShowContainer}/>
      <Route path="/sneakers/:sneakerId" component={SneakerShowContainer} />
      <Route path="/sneakers" component={SneakerIndexContainer} />
      <Route exact path="/" component={Home}/> 
      <Route path="/styles" component={Styles} />
      <Route exact path="/cart_items" component={CartItemsContainer} />
      <Route path ="/search" component={SearchContainer} />
    </Switch>
    </main> 

    <footer>
      <Footer/>
    </footer>
  </div>
)


export default App;

