import React from 'react';
import { NavLink } from 'react-router-dom';

class LoginPage extends React.Component{
  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-3"></div>
        <div className="panel panel-default">
          <div className="panel-heading"><h4>Login into account</h4></div>
          <div className="panel-body">
            <form>
              <div className="form-group">
                <label>Email:</label>
                <input name="email" className="form-control" />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input type="password" name="password" className="form-control" />
              </div>
              <div className="form-group">
                <button className="btn btn-danger">Login</button>
                <hr/>
                Don't have an account? <NavLink activeClassName="active"  to="/register">Register here</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
