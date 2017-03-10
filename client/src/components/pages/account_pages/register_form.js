import React from 'react';
import { NavLink } from 'react-router-dom';
import { REGISTER_INPUT_VALIDATOR } from '../../../utils/validator';
import TextFieldGroup from '../../common/TextFieldGroup';
import shortid from 'shortid';

class RegisterForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      email: "",
      password: "",
      confirm_password: "",
      errors: {},
      isLoading: false,
      isvalid: false
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.checkUserExists = this.checkUserExists.bind(this);
  }

  onChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  checkUserExists(e){
    const field = e.target.name;
    const val = e.target.value;
    if(val !== ''){
      this.props.isUserExists(val).then((res) => {
        let errors = this.state.errors;
        let invalid;
        if(res.data.users){
          errors[field] = "There is another user registered with such " + field;
          invalid = true;
        }else{
          errors[field] = '';
          invalid = false;
        }
        this.setState({ errors, invalid});
      });
    }
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
        this.props.addFlashMessage({
          id: shortid.generate(), //used to distinguish the messages
          type: 'success',
          text: 'Your registration was successful. Welcome!'
        });
        this.context.router.push('/login');
      });
    }else{
      this.setState({ isLoading: false });
    }

  }


  render(){
    //grab the errors
    const { errors } = this.state;
    return (
        <div className="panel panel-default z-depth-4">
          <div className="panel-heading"><h4>Account registration</h4></div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <TextFieldGroup
                error={errors.email}
                label="Email"
                onChange={this.onChange}
                value={this.state.email}
                checkUserExists={this.checkUserExists}
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
                <button className="btn btn-large btn-block" disabled={this.state.isLoading || this.state.invalid}>Register</button>
                <hr/>
                Already have an account? <NavLink activeClassName="active"  to="/login">Login here</NavLink>
              </div>
            </form>
          </div>
        </div>
    );
  }
}

RegisterForm.propTypes = {
  userRegisterRequest: React.PropTypes.func.isRequired,
  addFlashMessage: React.PropTypes.func.isRequired,
  isUserExists: React.PropTypes.func.isRequired
}

RegisterForm.contextTypes = {
  router: React.PropTypes.object.isRequired
}

export default RegisterForm;
