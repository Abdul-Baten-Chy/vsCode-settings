import { ErrorRequestHandler } from 'express';
import { TErrorSources } from '../app/interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  const message = 'somthing went wrong';
  const errorSource: TErrorSources = [
    {
      path: '',
      message: 'somthing went wrong',
    },
  ];
};
