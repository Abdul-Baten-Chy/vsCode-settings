import { NextFunction, Request, RequestHandler, Response } from 'express'

const catchAsync = (fn:RequestHandler) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    return Promise.resolve(fn(req:Request,res:Response,next:NextFunction)).catch((error) => next(error))
  }
}
