import httpStatus from 'http-status';
import config from '../../../config/config';
import AppError from '../../error/appError';
import { User } from '../user/user.model';
import { TLoginUser } from './auth.interface';
import { createToken } from './auth.utils';

const loginUser = async (payload: TLoginUser) => {
  // checking if the user is exist
  console.log({ payload });

  const user = await User.findOne({ email: payload.email });

  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  //checking if the password is correct

  if (!(await User.isPasswordMatched(payload?.password, user?.password)))
    throw new AppError(httpStatus.FORBIDDEN, 'Password do not matched');

  //create token and sent to the  client

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  console.log({ jwtPayload });

  const accessToken = createToken(
    jwtPayload,
    config.secreteKey as string,
    config.secreteKey_time as string
  );

  console.log({ accessToken });

  return {
    accessToken,
  };
};

export const AuthServices = {
  loginUser,
};
