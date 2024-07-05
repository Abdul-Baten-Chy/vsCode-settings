import { NextFunction, Request, RequestHandler, Response } from 'express';

const catchAsyncAwait = (fn: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch((err) => next(err));
  };
};
export default catchAsyncAwait;
