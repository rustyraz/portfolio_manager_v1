import jwt from 'jsonwebtoken';
import config from '../config/settings';
import User from '../models/user';

export default (req, res, next) => {
  const authorizationHeader = req.headers['authorization'];
  let token;

  if(authorizationHeader){
    token = authorizationHeader.split(' ')[1]; //returns an array then we take the second element
  }

  if(token){
    //token was found
    jwt.verify(token, config.jwtSecret, (err, decoded) => {
      if(err){
        res.status(401).json({ error: "Invalid token provided" });
      }else{
        //find user id
        User.query({
          where: { id: decoded.id },
          select: [ 'id', 'email' ]
        }).fetch().then(user => {
          if(!user){
              res.status(404).json({ error: "No such user found" });
          }else{
            req.currentUser = user;
            next();
          }
        }).catch(error => {
          //db error
          res.status(500).json({ error: "DB error: could not fetch user!" });
        });
      }
    });

  }else{
    res.status(403).json({
      error: "No token provided"
    });
  }
}
