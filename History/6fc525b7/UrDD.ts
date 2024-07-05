import { Router } from 'express';

const router = Router();

router.post(
  '/signin',
  validateRequest(AuthValidation.loginValidationSchema),
  AuthControllers.loginUser
);

export const authRoute = router;
