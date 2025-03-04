import mongoose from 'mongoose';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

const handleValidationError = (
  err: mongoose.Error.ValidationError
): TGenericErrorResponse => {
  const errorMessages: TErrorMessages = Object.values(err.errors).map(
    (val: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: val?.path,
        message: val?.message,
      };
    }
  );

  const statusCode = 400;

  return {
    success = false,
    message: 'Validation Error',
    errorSources,
  };
};
