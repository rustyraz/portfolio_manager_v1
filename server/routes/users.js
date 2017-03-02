import { Router } from 'express';
import commonValidations from '../shared/signup_validation';
import bcrypt from 'bcrypt';
//import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';
import isNull from 'lodash/isNull';

import User from '../models/user';

let router = Router();

function validateInput(data, otherValidations){
  let { errors } = commonValidations(data);

  return User.query({
    select: [ 'email' ],
    where: { email: data.email }
  }).fetch().then(user => {
    if(user){
      let userData = user.toJSON(user);
      if(userData.email === data.email){
        errors.email = "That email is already registered";
      }
    }
    return {
      errors,
      isValid: isEmpty(errors)
    };
  });
}

router.post('/register', (req,res) => {

  validateInput(req.body, commonValidations).then(({errors, isValid}) => {
    if(!isValid){
      res.status(400).json(errors);
    }else{
      const { email, password} = req.body;
      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
        email, password_digest
      }, { hasTimestamps: true }).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
    }
  });
  //setTimeout(()=>{},5000);


});

router.post('/login', (req,res) =>{
  res.status(400).json({
    errors: true
  });
});

router.get('/', (req,res) => {
  res.json({
    success: true,
    errors: false,
    data:{}
  });

});

router.get('/:emailIdentifier',(req,res) => {
  User.query({
    select: ['first_name','last_name','email'],
    where: { email: req.params.emailIdentifier }
  }).fetch().then(user => {
    let data = null;
    if(!isNull(user)){
      data = user.toJSON();
    }

    res.json({users: data});
  });
});

export default router;
