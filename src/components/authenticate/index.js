// src/components/Auth.js

import React, { Component } from 'react';
import axios from 'axios';
import './index.css';

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: true,
      email: '',
      password: '',
      name: '',
      errorMessage: '',
      successMessage: ''
    };
  }

  toggleForm = () => {
    this.setState({ 
      isLogin: !this.state.isLogin, 
      errorMessage: '',
      successMessage: '',
      email: '',
      password: '',
      name: ''
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleLogin = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;

    try {
      const response = await axios.post('https://logindaveed.onrender.com/login/', {
        email,
        password
      });

      const { token } = response.data;
      localStorage.setItem('token', token);
      this.props.history.push('/login');
    } catch (error) {
      this.setState({
        errorMessage: 'Invalid email or password'
      });
    }
  };

  handleRegister = async (event) => {
    event.preventDefault();
    const { name, email, password } = this.state;

    try {
      await axios.post('https://logindaveed.onrender.com/register/', {
        name,
        email,
        password
      });

      this.setState({
        successMessage: 'Registration successful! Please log in.',
        errorMessage: '',
        name: '',
        email: '',
        password: ''
      });

      this.toggleForm();
    } catch (error) {
      this.setState({
        errorMessage: 'Registration failed. Please try again.'
      });
    }
  };

  render() {
    const { isLogin, email, password, name, errorMessage, successMessage } = this.state;

    return (
      <div className="auth-container">
        {isLogin ? (
          <>
            <h2>Login</h2>
            <form onSubmit={this.handleLogin}>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {errorMessage && <p className="error">{errorMessage}</p>}
              <button type="submit">Login</button>
            </form>
            <p>
              Don't have an account? <button onClick={this.toggleForm}>Register here</button>
            </p>
          </>
        ) : (
          <>
            <h2>Register</h2>
            <form onSubmit={this.handleRegister}>
              <div>
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={this.handleChange}
                  required
                />
              </div>
              {errorMessage && <p className="error">{errorMessage}</p>}
              {successMessage && <p className="success">{successMessage}</p>}
              <button type="submit">Register</button>
            </form>
            <p>
              Already have an account? <button onClick={this.toggleForm}>Login here</button>
            </p>
          </>
        )}
      </div>
    );
  }
}

export default Auth;
