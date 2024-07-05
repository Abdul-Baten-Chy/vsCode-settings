// userConroller.createUser

import { Request, Response } from 'express';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { userServices } from './user.service';

const createUser = catchAsyncAwait(async (req: Request, res: Response) => {
  const payload = req.body;
  console.log(payload);

  const user = await userServices.createUserIntoDB(payload);

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'User is created succesfully',
    data: user,
  });
});

export const userConroller = {
  createUser,
};
