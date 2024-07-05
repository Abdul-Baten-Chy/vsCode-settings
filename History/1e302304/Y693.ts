import httpStatus from 'http-status';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { AuthServices } from './auth.services';

const loginUser = catchAsyncAwait(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);

  const { accessToken } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: {
      accessToken,
    },
  });
});

export const authController = {
  loginUser,
};
