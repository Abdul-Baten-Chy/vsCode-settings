import { Request, Response } from 'express';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';
import { bookingService } from './booking.services';

const createBooking = catchAsyncAwait(async (req: Request, res: Response) => {
  const payload = req.body;
  const carId = payload.car;
  console.log(carId);

  const result = await bookingService.createBookingIntoDB(payload);

  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Car booked successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
};
