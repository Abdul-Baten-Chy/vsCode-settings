import { Router } from 'express';
import { carsRouter } from '../modules/cars/car.route';
import { userRouter } from '../modules/user/user.router';

const router = Router();

const appRouter = [
  {
    path: '/auth',
    route: userRouter,
  },
  {
    path: '/cars',
    route: carsRouter,
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
