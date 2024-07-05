import catchAsyncAwait from '../../utills/catchAsyncAwait';
import { AuthServices } from './auth.services';

const loginUser = catchAsyncAwait(async (req, res) => {
  const result = await AuthServices.loginUser(req.body);
  const { refreshToken, accessToken, needsPasswordChange } = result;

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is logged in succesfully!',
    data: {
      accessToken,
      needsPasswordChange,
    },
  });
});

export const authController = {
  loginUser,
};
