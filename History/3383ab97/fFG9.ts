import { Router } from 'express';
import { userConroller } from './user.controller';

const router = Router();

router.post(
  '/signup',
  //   requestVAlidator(validateUser),
  userConroller.createUser
);

export const userRouter = router;
