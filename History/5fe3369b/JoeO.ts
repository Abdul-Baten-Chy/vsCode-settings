import { Router } from 'express';

const router = Router();

const appRouter = [
  {
    path: '/cars',
    route: 
  },
];

appRouter.forEach((route) => router.use(route.path, route.route));

export default router;
