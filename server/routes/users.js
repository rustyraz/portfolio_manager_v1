import { Router } from 'express';
import validateInput from '../shared/signup_validation';
import bcrypt from 'bcrypt';

import User from '../models/user';

let router = Router();

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
    first_name: "James",
    last_name: "Bond",
    email: "james@bond.com",
    password: "123",
    confirmedPassword: "123"
  }

  const { errors, isValid } = validateInput(dummyData);

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

export default router;
