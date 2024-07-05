import { Router } from 'express'
import { studentRouter } from '../students/student.router'

const router = Router()

const moduleRoutes = [
  {
    path: '/createStudent',
    route: studentRouter,
  },
]
