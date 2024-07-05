import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import userServicess from './user.servicess'

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body
    const result = await userServicess.createStudentIntoDb(
      password,
      studentData,
    )

    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User created sucessfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export const userController = {
  createStudent,
}
