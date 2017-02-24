import { Router } from 'express';

const router = Router();

router.get('/', (req,res) => {
  res.json({
    name: "Smart Portfolio",
    version: "1.0"
  });
});

export default router;
