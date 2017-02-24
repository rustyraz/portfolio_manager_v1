import { Router } from 'express';
import validator from 'validator';
import _ from 'lodash';

let router = Router();

function validateInput(data){
  let errors = {};

  if(_.isUndefined(data.name) || _.isNull(data.name)){
    errors.name = 'Name is required';
  }
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

router.post('/', (req,res) => {

  const { errors, isValid } = validateInput(req.body);

  if(!isValid){
    res.status(400).json(errors);
  }else{
    res.json({ success : true });
  }
});

router.get('/', (req,res) => {
  let dummyData = {
    name: "James Bond",
    email: "example@gmail.com",
    password: "123",
    confirmedPassword: "123"
  };

  const { errors, isValid } = validateInput(dummyData);

  if(!isValid){
    res.status(400).json(errors);
  }else{
    res.json({ success : true });
  }

});



export default router;
