import React from 'react';
import { connect } from 'react-redux';
import { login, deleteSessionErrors } from '../../actions/session_actions';
import LoginForm from './login_form';


const msp = ( state ) => ({
  errors: state.errors.session
})
 
const mdp = dispatch => ({
   login: (user) => dispatch(login(user)),
   clearErrors: (errors) => dispatch(deleteSessionErrors(errors))
});

export default connect(
  msp,
  mdp
)(LoginForm);
