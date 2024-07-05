import { Router } from 'express';
import { userRouter } from '../modules/user/user.router';

const router = Router();

const appRouter = [
  {
    path: '/auth',
    route: userRouter,
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
