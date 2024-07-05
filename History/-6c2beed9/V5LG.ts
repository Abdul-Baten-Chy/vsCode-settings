import { NextFunction, Request, Response } from 'express'
import sendResponse from '../../utils/sendResponse'
import { StudentServices } from './student.services'

// const createStudent = async (req: Request, res: Response) => {
//   const { studentData } = req.body
//   const result = await studentServices.createStudentController(studentData)

//   res.status(200).json({
//     success: true,
//     message: 'student is created successfully',
//     data: result,
//   })
// }

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentFromDb()
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    })
  } catch (error) {}
}

export default {
  createStudent,
}
