import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import handleCastError from '../app/error/handleCastError';
import handleZodError from '../app/error/handleZodError';
import handleValidationError from '../app/error/mongooseValidation';
import { TErrorMessages } from '../app/interface/error';

const globalErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const statusCode = 500;
  let message = 'somthing went wrong';
  let errorMessages: TErrorMessages = [
    {
      path: '',
      message: 'somthing went wrong',
    },
  ];

  if (err instanceof ZodError) {
    const simplifiedError = handleZodError(err);
    message = simplifiedError?.message;
    const errorMessages = simplifiedError?.errorMessages;
  } else if (err?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(err);
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;
  } else if (err?.name === 'CastError') {
    const simplifiedError = handleCastError(err);
    message = simplifiedError?.message;
    errorMessages = simplifiedError?.errorMessages;
  }
};
