import React from 'react';
import { connect } from 'react-redux';
import { signup, deleteSessionErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const msp = (state) => ({
  errors: state.errors.session,
})


const mdp = dispatch => ({
  signup: (user) => dispatch(signup(user)),
  clearErrors: (errors) => dispatch(deleteSessionErrors(errors))
});

export default connect(
  msp,
  mdp
)(SignupForm);
