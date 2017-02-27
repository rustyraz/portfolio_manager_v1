import React from 'react';
import { NavLink } from 'react-router-dom';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: ""
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e){
    e.preventDefault();
    this.props.userRegisterRequest(this.state);
  }



  render(){
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-3"></div>
        <div className="panel panel-default">
          <div className="panel-heading"><h4>Account registration</h4></div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Email:</label>
                <input
                  value={this.state.email}
                  type="text"
                  className="form-control"
                  onChange={this.onChange}
                  name="email"
                />
              </div>
              <div className="form-group">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Confirm password:</label>
                <input
                  type="password"
                  name="confirm_password"
                  className="form-control"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <button className="btn btn-danger">Register</button>
                <hr/>
                Already have an account? <NavLink activeClassName="active"  to="/login">Login here</NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired
}

export default RegisterForm;
