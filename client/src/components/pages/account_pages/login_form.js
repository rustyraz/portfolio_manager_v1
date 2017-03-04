import React from 'react';

import { NavLink } from 'react-router-dom';
import TextFieldGroup from '../../common/TextFieldGroup';
import validateLoginInput from '../../../utils/login_validator';

class LoginForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      errors: {},
      isLoading: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  isValid(){
    const { errors, isValid } = validateLoginInput(this.state);
    if(!isValid){
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e){
    e.preventDefault();
    if(this.isValid()){
      //no errors found
      this.setState({
        errors: {},
        isLoading: true
      });
      this.props.loginActions(this.state)
      .then((resp) => {
        this.context.router.push('/profile');
      }).catch((err) => {
        const err_data = err.response.data;
        this.setState({
          errors: err_data.errors,
          isLoading: false
        });
      });
    }else{

    }
  }

  onChange(e){
    this.setState({ [e.target.name] : e.target.value });
  }

  render(){
    const { errors, email, password, isLoading } = this.state;
    return (
        <div className="panel panel-default">
          <div className="panel-heading"><h4>Login into account</h4></div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>

              {errors.form && <div className="alert alert-danger">{errors.form}</div>}

              <TextFieldGroup
                error={errors.email}
                label="Email"
                onChange={this.onChange}
                value={email}
                fieldName="email"
                type="email"
              />

              <TextFieldGroup
                error={errors.password}
                label="Password"
                onChange={this.onChange}
                value={password}
                fieldName="password"
                type="password"
              />

              <div className="form-group">
                <button className="btn btn-danger btn-lg btn-block" disabled={isLoading}>Login</button>
                <hr/>
                Don't have an account? <NavLink activeClassName="active"  to="/register">Register here</NavLink>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

LoginForm.propTypes = {
  loginActions: React.PropTypes.func.isRequired
}

LoginForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default LoginForm;
