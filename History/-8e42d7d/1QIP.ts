import express from 'express'
import validateRequest from '../../middleware/validateRequest'
import { createStudentValidationSchema } from '../students/student.validation'
import { userController } from './user.controller'

const router = express.Router()

router.post('/create-student',validateRequest(createStudentValidationSchema) userController.createStudent)

export const UserRoutes = router
