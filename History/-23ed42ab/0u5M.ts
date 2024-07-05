//carsController.createCars

import { Request, Response } from 'express';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { carServices } from './car.services';

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
  const allCars = await carServices.getAllCarsFromDB();
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Cars retrieved successfully',
    data: allCars,
  });
});
const getSingleCars = catchAsyncAwait(async (req: Request, res: Response) => {
  const id = req.params.id;
  console.log('id', id);

  const car = await carServices.getSingleCarsfromDB(id);
  console.log('me', car);

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'A Car retrieved successfully',
    data: car,
  });
});
const updateSingleCar = catchAsyncAwait(async (req: Request, res: Response) => {
  const { id } = req.params;
  const payload = req.body;
  const result = await carServices.updateCarIntoDB(id, payload);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Car updated successfully',
    data: result,
  });
});

const deleteAcar = catchAsyncAwait(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await carServices.deleteAcarFromDB(id);
});
export const carsController = {
  createCars,
  getAllCars,
  getSingleCars,
  updateSingleCar,
};
