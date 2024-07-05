import express from 'express'
import studentController from './student.controller'

const router = express.Router()

router.post('/createStudent', studentController.createStudent)

export const studentRouter = router
