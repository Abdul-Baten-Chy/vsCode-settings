//carsController.createCars

import { Request, Response } from 'express';
import sendResponse from '../../utills/sendResponse';

const createCars = async (req: Request, res: Response) => {
  const payload = req.body;
  const cars = await carServices.createCarsIntoDB(payload);

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'User registered successfully',
    data: user,
  });
};

export const carsController = {
  createCars,
};
