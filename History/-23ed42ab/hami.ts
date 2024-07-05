//carsController.createCars

import { Request, Response } from 'express';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { carServices } from './car.services';
import { Car } from './cars.model';

const createCars = catchAsyncAwait(async (req: Request, res: Response) => {
  const payload = req.body;
  const cars = await carServices.createCarsIntoDB(payload);

  return sendResponse(res, {
    success: true,
    statusCode: 201,
    message: 'Car created successfully',
    data: cars,
  });
});

const getAllCars = catchAsyncAwait(async (req: Request, res: Response) => {
  const allCars = await Car.find();
});

export const carsController = {
  createCars,
  getAllCars,
};
