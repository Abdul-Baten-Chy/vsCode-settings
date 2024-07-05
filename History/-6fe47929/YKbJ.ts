import { NextFunction, Request, Response } from 'express'
import httpStatus from 'http-status'

const notFoudRouteHandler = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  return res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'API is not found',
    err: '',
  })
}

export default notFoudRouteHandler
