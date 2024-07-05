import { Request, RequestHandler, Response } from 'express';

const catchAsyncAwait = (fn: RequestHandler) => {
  return (req: Request, res: Response) => {
    Promise.resolve(fn(req, res, next)).catch((error) => next(error));
  };
};
export default catchAsyncAwait;
