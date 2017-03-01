import React from 'react';
import { NavLink } from 'react-router-dom';
import { REGISTER_INPUT_VALIDATOR } from '../../../lib/validator';
import TextFieldGroup from '../../common/TextFieldGroup';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      errors: {},
      isLoading: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  isValid(){
    const {errors, isValid } = REGISTER_INPUT_VALIDATOR(this.state);
    if(!isValid){
      this.setState({ errors });
    }
    return isValid;
  }

  onSubmit(e){
    //set errors to an empty object on each submit
    this.setState({
      errors: {},
      isLoading: true
    });
    e.preventDefault();
    //frontend validation if true then do the ajax REGISTER_USER_REQUEST
    if(this.isValid()){
        //the axios funstion returned from the constainer
      this.props.userRegisterRequest(this.state)
      .catch((err) => {
        this.setState({
          errors: err.response.data,
          isLoading: false
        });
      })
      .then((data) => {
        //redirect on success
        this.context.router.push('/');
      });
    }else{
      this.setState({ isLoading: false });
    }

  }


  render(){
    //grab the errors
    const { errors } = this.state;
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-3"></div>
        <div className="panel panel-default">
          <div className="panel-heading"><h4>Account registration</h4></div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                error={errors.email}
                label="Email"
                onChange={this.onChange}
                value={this.state.email}
                fieldName="email"
              />

              <TextFieldGroup
                error={errors.password}
                label="Password"
                onChange={this.onChange}
                value={this.state.password}
                fieldName="password"
                type="password"
              />

              <TextFieldGroup
                error={errors.confirm_password}
                label="Confirm password"
                onChange={this.onChange}
                value={this.state.confirm_password}
                fieldName="confirm_password"
                type="password"
              />


              <div className="form-group">
                <button className="btn btn-danger" disabled={this.state.isLoading}>Register</button>
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

RegisterForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default RegisterForm;
