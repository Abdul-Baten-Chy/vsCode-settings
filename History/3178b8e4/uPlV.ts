// userConroller.createUser

import { Request, Response } from 'express';
import httpStatus from 'http-status';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { userServices } from './user.service';

const createUser = catchAsyncAwait(async (req: Request, res: Response) => {
  const payload = req.body;
  const user = await userServices.createUserIntoDB(payload);

  return sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Student is created succesfully',
    data: result,
  });
});

export const userConroller = {
  createUser,
};
