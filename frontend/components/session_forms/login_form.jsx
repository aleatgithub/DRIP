import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
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

  renderErrors() { //rendering session errors
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

   render() {
    return (
       <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h4>Log yourself in gurl.</h4>
          {this.renderErrors()}
          <br />  
           <div className="login-form">
             <br />
             <label>Email:
              <input type="text"
                 value={this.state.email}
                 onChange={this.update('email')}
                 className="login-input"
               />
             </label>
             <br />
             <label>Password:
              <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="login-input"
               />
             </label>
             <br />
            <input className="session-submit" type="submit" value="Login"></input>
           </div>
         </form>
       </div>
    )
  }
}

export default LoginForm