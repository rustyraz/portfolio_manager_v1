import validator from 'validator';
import _ from 'lodash';

export const REGISTER_INPUT_VALIDATOR = (data) => {
  let errors = {};

  if(_.isUndefined(data.email) || _.isNull(data.email)){
    errors.email = "Email is required";
  }
  if(!_.isUndefined(data.email) && !_.isNull(data.email)){
    if(!validator.isEmail(data.email)){
      errors.email = "Email is invalid";
    }
  }

  if(_.isUndefined(data.password) || _.isNull(data.password)){
    errors.password = "Password is required";
  }

  if(!_.isUndefined(data.password) && !_.isNull(data.password)){
    if(validator.isEmpty(data.password)){
      errors.password = "A password is required";
    }
  }

  if(_.isUndefined(data.confirm_password)){
    errors.confirm_password = "Confirm Password is Required";
  }

  if(!_.isUndefined(data.confirm_password) && !_.isUndefined(data.confirm_password)){
    if(validator.isEmpty(data.confirm_password)){
      errors.confirm_password = "A Confirm password is required";
    }
  }

  if(!_.isUndefined(data.password) && !_.isUndefined(data.confirm_password)){
    if(!validator.equals(data.password, data.confirm_password)){
      errors.confirm_password = "Passwords must match";
    };
  };

  return {
    errors,
    isValid: _.isEmpty(errors)
  }
}
