import { Router } from 'express';
import { userConroller } from './user.controller';

const router = Router();

router.post('/auth/signup', userConroller.createUser);

export const userRouter = router;
