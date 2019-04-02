import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  return res.send(req.context.models.code);
});

export default router;
