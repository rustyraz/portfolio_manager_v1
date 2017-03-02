import express from 'express';
import User from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import settings from '../config/settings';

let router = express.Router();

router.post('/', (req,res) => {
  const { email, password } = req.body;

  User.query({
    where: { email: email }
  }).fetch().then( user => {
    if(user){
      //we compare password
      if(bcrypt.compareSync(password, user.get('password_digest'))){
        //we create json webtoken
        const token = jwt.sign({
          id: user.get('id'),
          email: user.get('email')
        }, settings.jwtSecret );
        res.json({ token });
      }else{
        res.status(401).json({
          errors: {
            password: 'Wrong password'
          }
        });
      }
    }else{
      res.status(401).json({
        errors: {
          form: 'Invalid Credentials'
        }
      });
    }
  });
});

export default router;
