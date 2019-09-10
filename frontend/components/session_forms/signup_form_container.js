import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = (state) => ({
  errors: state.errors.session,
})


const mpd = dispatch => ({
  signup: (user) => dispatch(signup(user))
});

export default connect(
  msp,
  mpd
)(SignupForm);
