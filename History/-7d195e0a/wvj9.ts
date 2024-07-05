import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync: RequestHandler = (fn) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn()).catch((error) => next(error))
  }
}
