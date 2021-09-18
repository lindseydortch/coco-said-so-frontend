import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from '../../actions/auth'

export class Register extends Component {
  state = {
    username: '', 
    email: '', 
    password: '',
    password2: ''
  }

  static propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
  }

  onSubmit = e => {
    e.preventDefault()
    const { username, email, password, password2 } = this.state

    if(password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match'})
    } else {
      const newUser = {
        username, 
        password,
        email
      }
      this.props.register(newUser)
    }
  }

  onChange = e => this.setState({ [e.target.name]: e.target.value })

  render() {
    if(this.props.isAuthenticated) {
      return <Redirect to='/' />
    }
    const { username, email, password, password2 } = this.state
    return (
      <section className="register_section">
        <h2>Create An Account</h2>
        <form onSubmit={this.onSubmit} className="form form-background-orange">
          <div className="form-group">
            <label>Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              name="password"
              onChange={this.onChange}
              value={password}
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              className="form-control"
              name="password2"
              onChange={this.onChange}
              value={password2}
            />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-mg-small btn-yellow-light">
              Register
            </button>
          </div>
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </section>
    )
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register })(Register)
