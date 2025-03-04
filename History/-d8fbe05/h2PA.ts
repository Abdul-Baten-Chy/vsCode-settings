import { TErrorMessages } from '../interface/error';

const handleDuplicateError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);

  const extractedMessage = match && match[1];

  const errorMessages: TErrorMessages = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 400;

  return {
    success: false,
    message: 'Invalid ID',
    errorMessages,
  };
};
