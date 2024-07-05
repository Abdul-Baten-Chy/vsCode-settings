import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import userServicess from './user.servicess'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { studentData } = req.body
  const result = await userServicess.createStudentIntoDb(studentData)

  sendResponse(res, {
    statusCode: httpStatus.OK,
  })
  res.status(200).json({
    success: true,
    message: 'student is created successfully',
    data: result,
  })
}

export const userController = {
  createStudent,
}
