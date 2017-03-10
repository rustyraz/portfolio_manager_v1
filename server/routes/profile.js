import { Router } from 'express';
import authenticate from '../middlewares/authenticate';

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

export default router;
