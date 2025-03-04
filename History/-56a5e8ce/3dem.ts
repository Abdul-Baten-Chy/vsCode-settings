import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { UserServices } from './user.servicess'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  
    const { password, student: studentData } = req.body
    const result = await UserServices.createStudentIntoDb(password, studentData)

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created sucessfully',
      data: result,
   
}

export const userController = {
  createStudent,
}
