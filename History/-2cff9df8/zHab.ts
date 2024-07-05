import { Router } from 'express'
import { studentRouter } from '../modules/students/student.router'
import { UserRoutes } from '../modules/user/user.route'

const router = Router()

const moduleRoutes = [
  {
    path: '/createStudent',
    route: studentRouter,
  },
  {
    path: '/createUser',
    route: UserRoutes,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
