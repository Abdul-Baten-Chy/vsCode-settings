import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import handleZodError from '../app/error/handleZodError';
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
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;
  }
};
