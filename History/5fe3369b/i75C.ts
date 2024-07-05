import { Router } from 'express';

const router = Router();

const appRouter = [
  {
    path: '/cars',
    route: null,
  },
];

appRouter.forEach((route) => router.use(route.path, route?.route));

export default router;
