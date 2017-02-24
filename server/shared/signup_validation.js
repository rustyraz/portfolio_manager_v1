import validator from 'validator';
import _ from 'lodash';

export default function validateInput(data){
  let errors = {};

  if(_.isUndefined(data.email) || _.isNull(data.email)){
    errors.email = "Email is required";
  }
  if(!_.isUndefined(data.email) && !_.isUndefined(data.email)){
    if(!validator.isEmail(data.email)){
      errors.email = "Email is invalid";
    }
  }
  if(_.isUndefined(data.password) || _.isNull(data.password)){
    errors.password = "Password is required";
  }
  if(_.isUndefined(data.confirmedPassword)){
    errors.confirmedPassword = "Confirm Password is Required";
  }

  if(!_.isUndefined(data.password) && !_.isUndefined(data.confirmedPassword)){
    if(!validator.equals(data.password, data.confirmedPassword)){
      errors.confirmedPassword = "Passwords must match";
    };
  };

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
