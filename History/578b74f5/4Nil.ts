import { Request, Response } from 'express';
import catchAsyncAwait from '../../utills/catchAsyncAwait';
import sendResponse from '../../utills/sendResponse';

const createBooking = catchAsyncAwait(async (req: Request, res: Response) => {
  const payload = req.body;
  const result = await bookingService.createBookingIntoDB(payload);
  return sendResponse(res, {
    success: true,
    statusCode: 200,
    message: 'Car Deleted successfully',
    data: result,
  });
});

export const bookingController = {
  createBooking,
};
