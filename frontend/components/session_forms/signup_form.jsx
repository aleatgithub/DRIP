import React from 'react';
import { Link } from 'react-router-dom'


class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearErrors = this.clearErrors.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user);
  }

  clearErrors() {
    this.props.clearErrors(this.props.errors)

  }

  renderErrors() {
    return (
      <ul className="errors-ul">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <br/>
            {error} 
            <br/>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
   
      <div className="login-form-container">
        <div className="signup-hero">
       </div>

      <div className="parent-login-box">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h4 id="login-title">Create an Account </h4>  
            <br/>

            <div className="session-errors">
               {this.renderErrors()}
            </div>

          <div className="login-form">
            <label>
              <span id="input-text">Full Name</span>
              <input type="text"
                value={this.state.username}
                onChange={this.update('username')}
                className="login-input-field"
              />
            </label>
            < br/>
            <label>
              <span id="input-text">Email</span>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input-field"
              />
            </label>
            <br/>
            <label>
              <span id="input-text">Password</span>
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input-field"
              />
            </label>
              
            <br/>

            <div className="signup-link-container">
              <span id="signup-link">
                <Link to="/login" onClick={this.clearErrors}>Back</Link>
              </span>
            </div >

            <div className="session-submit">
              <input id="session-submit-button" type="submit" className="hidden" value="Signup"></input>
            </div>
          </div>
        </form>

          <div className="session-submit">
            <label htmlFor="session-submit-button" id="label-ssb">
              Sign Up
            </label>
          </div>
      </div>
    </div>
 
    )
  }
}

export default SignupForm

