import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import config from '../../../config/config';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { bookingService } from './booking.services';

const createBooking = catchAsyncAwait(async (req: Request, res: Response) => {
  const payload = req.body;
  const carId = payload.car;
  const token = req?.headers?.authorization?.split(' ')[1] as string;

  const decoded = jwt.verify(token, config.secreteKey as string) as JwtPayload;

  const { role, userEmail, iat } = decoded;
  console.log(carId);

  const result = await bookingService.createBookingIntoDB(payload);

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Car booked successfully',
    data: result,
  });
});
const getAllBookings = async (req: Request, res: Response) => {
  const carId = req.query.carId;
  console.log(carId);

  const result = await bookingService.getAllBooking(carId as string);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Bookings retrieved successfully',
    data: result,
  });
};
const getSingleBookings = async (req: Request, res: Response) => {
  const result = bookingService.getSingleBooking();
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Bookings retrieved successfully',
    data: result,
  });
};

export const bookingController = {
  createBooking,
  getAllBookings,
  getSingleBookings,
};
