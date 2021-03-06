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

  }

  handleDemo() {
    this.clearErrors();
    this.props.login(this.demoUser)
  }


  componentWillUnmount() {
    this.clearErrors();
  }

  renderErrors() {
    return (
      <ul className="errors-ul">
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            <br />
            {error}
            <br />
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
        <form className="login-form-box">
          <h4 id="login-title">Log in</h4>

            <div className="session-errors">
              {this.renderErrors()}
            </div>

           <div className="login-form">
             <label>
              <span id="input-text">Email Address</span>
              <input type="text"

                 className="login-input-field"
               />
             </label>
             <br />
             <label>
              <span id="input-text">Password</span>
              <input type="password"
  
                 className="login-input-field"
               />
             </label>

             <br/>
            <div className="signup-link-container">
              <span id="signup-link">
               <Link to="/signup" className="capital-l-links">Create Account +</Link>
              </span>
            </div>
             <div>
                <input id="session-submit-button" type="submit" className="hidden" value="Login"></input> 
             </div>
            </div>

            <div className="demo-button-container">
              <button id="demo-button" onClick={this.handleDemo}>DEMO +</button>
            </div>
            
          </form>

          <div className="session-submit"> 
            <label htmlFor="session-submit-button" id="label-ssb" onClick={this.handleSubmit}>
                Log In
            </label>
          </div>
        </div> 
       </div>
   
    )
  }
}

export default LoginForm

