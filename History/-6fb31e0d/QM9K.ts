//bookingService.createBookingIntoDB

import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBooking = async (payload: Tbooking) => {
  return await Booking.create(payload);
};

export const bookingService = {
  createBookingIntoDB,
};
