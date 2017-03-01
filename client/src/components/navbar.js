import React from 'react';
import { NavLink } from 'react-router-dom';

export default class navbar extends React.Component {
  render(){
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
            <a className="navbar-brand" href="/">Portfolio Manager</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a href="/">Home <span className="sr-only">(current)</span></a></li>
            </ul>

            <ul className="nav navbar-nav navbar-right">
              <li>
                <NavLink activeClassName="active"  to="/register">Register</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active"  to="/login">Login</NavLink>
              </li>

              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">Profile</a></li>
                  <li><a href="#">Settings</a></li>
                  <li role="separator" className="divider"></li>
                  <li><a href="#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
