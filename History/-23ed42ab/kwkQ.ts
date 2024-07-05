//carsController.createCars

import { Request, Response } from 'express';
import sendResponse from '../../utills/sendResponse';

const createCars = async (req: Request, res: Response) => {
  const payload = req.body;
  const cars = await carServices.createCarsIntoDB(payload);

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Car created successfully',
    data: cars,
  });
};

export const carsController = {
  createCars,
};
