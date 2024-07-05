import { Router } from 'express';
import requestVAlidator from '../../../midleware/requestValidator';
import { loginValidationSchema } from './auth.validation';

const router = Router();

router.post(
  '/signin',
  requestVAlidator(loginValidationSchema),
  AuthControllers.loginUser
);

export const authRoute = router;
