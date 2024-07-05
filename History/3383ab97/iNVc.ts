import { Router } from 'express';
import requestVAlidator from '../../../midleware/requestValidator';
import { userConroller } from './user.controller';
import validateUser from './user.validation';

const router = Router();

router.post('/', requestVAlidator(validateUser), userConroller.createUser);

export const userRouter = router;
