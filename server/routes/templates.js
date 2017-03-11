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

router.get('/', /*authenticate,*/ (req,res) => {
  res.status(200).json({
    success: true,
    error: false,
    data: [
      {
        id: 1,
        name: "sample_001"
      },
      {
        id: 1,
        name: "sample_002"
      }
    ]
  });
});

export default router;
