import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUserAction } from '../actions/authenticationActions';
import { setCookie } from '../utils/cookies';
import './loginPage.css'

class LoginPage extends Component {
  onHandleLogin = (event) => {
    event.preventDefault();

    let email = event.target.email.value;
    let password = event.target.password.value;

    const data = {
      email, password
    };

    this.props.dispatch(loginUserAction(data));
  }
  componentDidMount() {
    document.title = 'React Login';
  }

  render() {
    let isSuccess, message;

    if (this.props.response.login.hasOwnProperty('response')) {
      isSuccess = this.props.response.login.response.success;
      message = this.props.response.login.response.message;

      if (isSuccess) {
        setCookie('token', this.props.response.login.response.token, 1);
      }
    }

    return (
      <div className="outer">
        <div className="inner">
          <h3><span className="heading">Coders Evoke Submissions Login Page</span></h3>
          <form onSubmit={this.onHandleLogin}>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" id="email" />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <div className="btn-container">
              <button className="login-btn">Login</button>
            </div>
            {!isSuccess ? <div style={{ color: "#ffacac" }}>{message}</div> : <Redirect to='dashboard' />}
          </form>
          Don't have account? Contact the admin staff.
        </div>
      </div>
    );
  }
}

const mapStateToProps = (response) => ({ response });

export default connect(mapStateToProps)(LoginPage);