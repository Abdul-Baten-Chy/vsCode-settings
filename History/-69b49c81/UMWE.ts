import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorMessages } from '../app/interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  const message = 'somthing went wrong';
  const errorSource: TErrorMessages = [
    {
      path: '',
      message: 'somthing went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    statusCode = simplifiedError?.statusCode;
    message = simplifiedError?.message;
    errorSources = simplifiedError?.errorSources;
  }
};
