import { Router } from 'express';
import authenticate from '../middlewares/authenticate';
import user_profile from '../dummy_data/resume_sample';

const router = Router();

router.post('/', authenticate, (req,res) => {
  //const { first_name, second_name } = req.body;
  res.status(201).json({
    success: true,
    data:{
      ...req.body,
      //user: req.currentUser
    }
  });
});

router.get('/', authenticate, (req,res) => {
  //we will query data from db
  res.status(200).json(user_profile);
});

export default router;
