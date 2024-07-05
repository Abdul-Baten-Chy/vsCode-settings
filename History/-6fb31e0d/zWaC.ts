//bookingService.createBookingIntoDB

import { Booking } from './bookings.model';

const createBooking = async (payload) => {
  return await Booking.create(payload);
};

export const bookingService = {
  createBookingIntoDB,
};
