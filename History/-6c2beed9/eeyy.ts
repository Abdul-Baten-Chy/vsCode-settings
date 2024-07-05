import { Request, Response } from 'express'
import studentServices from './student.services'

const createStudent = async (req: Request, res: Response) => {
  const { studentData } = req.body
  const result = await studentServices.createStudentController(studentData)

  res.status(200).json({
    success: true,
    message: 'student is created successfully',
    data: result,
  })
}

export default {
  createStudent,
}
