import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/authActions';

class navbar extends React.Component {

  logout(e){
    e.preventDefault();
    this.props.logout();
  }

  render(){

    const { isAuthenticated } = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li className="dropdown">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
          <ul className="dropdown-menu">
            <li>
              <NavLink activeClassName="active"  to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active"  to="/settings">Settings</NavLink>
            </li>
            <li role="separator" className="divider"></li>
            <li><a href="#" onClick={this.logout.bind(this)}>Logout</a></li>
          </ul>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <NavLink activeClassName="active"  to="/register">Register</NavLink>
        </li>
        <li>
          <NavLink activeClassName="active"  to="/login">Login</NavLink>
        </li>
      </ul>
    );


    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            { isAuthenticated ? userLinks : guestLinks }

          </div>
        </div>
      </nav>
    );
  }
}

navbar.propTypes = {
  auth: React.PropTypes.object.isRequired,
  logout: React.PropTypes.func.isRequired
}

function mapStateToProps(state){
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, { logout })(navbar);
