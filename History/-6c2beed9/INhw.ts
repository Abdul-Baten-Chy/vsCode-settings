import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'
import sendResponse from '../../utils/sendResponse'
import { StudentServices } from './student.services'

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
  } catch (error) {
    next(error)
  }
}

const getSingleStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await StudentServices.getSingleStudentFromDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}
const deleteStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params
    const result = await StudentServices.deleteStudentFromDB(id)
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Student are retrieved succesfully',
      data: result,
    })
  } catch (error) {
    next(error)
  }
}

export default {
  getAllStudents,
  getSingleStudent,
  deleteStudent,
}
