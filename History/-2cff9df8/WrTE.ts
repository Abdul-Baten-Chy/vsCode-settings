import { Router } from 'express'
import { studentRouter } from '../students/student.router'

const router = Router()

const moduleRoutes = [
  {
    path: '/createStudent',
    route: studentRouter,
  },
]

moduleRoutes.forEach((route) => router.use(route.path, route.route))

export default router
