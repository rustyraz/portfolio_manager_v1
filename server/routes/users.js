import { Router } from 'express';
import commonValidations from '../shared/signup_validation';
import bcrypt from 'bcrypt';
//import Promise from 'bluebird';
import isEmpty from 'lodash/isEmpty';

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

  // return Promise.all([
  //   User.where({ email: data.email }).fetch().then(user => {
  //     if(user) { errors.email = "That email is already registered" }
  //   })
  // ]).then(() => {
  //   return {
  //     errors,
  //     isValid: isEmpty(errors)
  //   };
  // });

}

router.post('/', (req,res) => {

  const { errors, isValid } = validateInput(req.body);

  if(!isValid){
    res.status(400).json(errors);
  }else{
    const {first_name, last_name, email, password} = req.body;
    const password_digest = bcrypt.hashSync(password, 10);

    User.forge({
      first_name, last_name, email, password_digest
    }, { hasTimestamps: true }).save()
    .then(user => res.json({ success: true }))
    .catch(err => res.status(500).json({ error: err }));
  }
});

router.get('/', (req,res) => {

  let dummyData = {
    first_name: "Michael",
    last_name: "Bay",
    email: "bay@movies.com",
    password: "123",
    confirmedPassword: "123"
  }

  validateInput(dummyData, commonValidations).then(({errors, isValid}) => {
    if(!isValid){
      res.status(400).json(errors);
    }else{
      const {first_name, last_name, email, password} = dummyData;
      const password_digest = bcrypt.hashSync(password, 10);

      User.forge({
        first_name, last_name, email, password_digest
      }, { hasTimestamps: true }).save()
      .then(user => res.json({ success: true }))
      .catch(err => res.status(500).json({ error: err }));
    }
  });


});

router.get('/:identifier',(req,res) => {
  User.query({
    select: ['first_name','last_name','email'],
    where: { email: req.params.identifier }
  }).fetch().then(user => {
    let data = user.toJSON();
    res.json(user);
  });
});

export default router;
