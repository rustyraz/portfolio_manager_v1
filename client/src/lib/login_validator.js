import validator from 'validator';
import _ from 'lodash';

export default function validateLoginInput(data){
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

  return {
    errors,
    isValid: _.isEmpty(errors)
  };
}
