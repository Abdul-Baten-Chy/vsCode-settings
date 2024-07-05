// userConroller.createUser

import { Request, Response } from 'express';
import sendResponse from '../../utills/sendResponse';
import { userServices } from './user.service';

const createUser = async (req: Request, res: Response) => {
  try {
    const payload = req.body;
    console.log(payload);

    const user = await userServices.createUserIntoDB(payload);

    return sendResponse(res, {
      success: true,
      statusCode: 201,
      message: 'User registered successfully',
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

export const userConroller = {
  createUser,
};
