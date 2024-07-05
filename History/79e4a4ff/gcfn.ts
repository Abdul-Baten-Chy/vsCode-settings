import { ZodError, ZodIssue } from 'zod';
import { TErrorMessages, TGenericErrorResponse } from '../interface/error';

const handleZodError = (err: ZodError): TGenericErrorResponse => {
  const errorSources: TErrorMessages = err.issues.map((issue: ZodIssue) => {
    return {
      path: issue?.path[issue.path.length - 1],
      message: issue.message,
    };
  });
  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorMessages,
  };
};
export default handleZodError;
