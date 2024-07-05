import { Router } from 'express';
import { userConroller } from './user.controller';
import requestVAlidator from '../../../midleware/requestValidator';
import validateUser from './user.validation';

const router = Router();

router.post(
  '/signup',
    requestVAlidator(validateUser),
  userConroller.createUser
);

export const userRouter = router;
