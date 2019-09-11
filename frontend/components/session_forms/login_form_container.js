import React from 'react';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import LoginForm from './login_form';

const msp = ( state ) => ({
  errors: state.errors.session
})
 
const mpd = dispatch => ({
  login: (user) => dispatch(login(user))
});

export default connect(
  msp,
  mpd
)(LoginForm);
