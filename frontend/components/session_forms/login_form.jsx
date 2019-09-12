import React from 'react';
import { Link } from 'react-router-dom';
import { deleteSessionErrors } from '../../actions/session_actions';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.clearErrors = this.clearErrors.bind(this);
    this.demoUser = {
      email: "demo@drip.com",
      password: "password"
    }
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({
        [field]: e.target.value
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.login(user);
  }

  clearErrors() {
    this.props.clearErrors(this.props.errors)
    console.log("clearErrors is being called")
  }

  handleDemo() {
    // e.preventDefault();
    this.props.login(this.demoUser)
  }

  // setTimeout(this.clearErrors, 10000)

  renderErrors() { 
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
 
          </li>
        ))}
      </ul>
    );
  }


   render() {
    return (
     
       <div className="login-form-container">
          <div className="login-hero">
          </div>

       <div className="parent-login-box">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h4 id="login-title">Log in</h4>
           <div className="login-form">
             <br/>

              <div className="session-errors">
                {this.renderErrors()}
              </div>

               <br/>

             <label>
              <span id="input-text">Email Address</span>
              <input type="text"
                 value={this.state.email}
                 onChange={this.update('email')}
                 className="login-input-field"
               />
             </label>
             <br />
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
               <Link to="/signup" onClick={this.clearErrors}>Create Account +</Link>
              </span>
                <button onClick={this.handleDemo} id="demo-button">DEMO +</button>
            </div>

            <div className="session-submit">
                <input id="session-submit-button" type="submit" className="hidden" value="Login"></input> 
             </div>
            </div>
         </form>

          <div className="session-submit"> 
            <label htmlFor="session-submit-button" id="label-ssb">
                Log In
            </label>
        </div>
        </div> 
       </div>
   
    )
  }
}

export default LoginForm

