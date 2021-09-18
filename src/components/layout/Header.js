import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../../actions/auth'

export class Header extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired
  }

  render() {
    const { isAuthenticated } = this.props.auth

    const authLinks = (
      <nav className="nav">
      <ul className="nav_list">
        <li className="nav_item">
          <Link onClick={this.props.logout} to="/login" className="nav_link">
            Logout
          </Link>
        </li>
      </ul>
    </nav>

    );

    const guestLinks = (
      <nav className="nav">
        <ul className="nav_list">
          <li className="nav_item">
            <Link to="/register" className="nav_link">
              Register
            </Link>
          </li>
          <li className="nav_item">
            <Link to="/login" className="nav_link">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    );

    return (
      <header className="header">
        <div className="logobar">
          <h1>
            COCO SAID SO
          </h1>
        </div>
        <div>
            {isAuthenticated ? authLinks : guestLinks}
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps, { logout })(Header)