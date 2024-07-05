import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBookingIntoDB = async (payload: Tbooking) => {
  return await Booking.create(payload);
};

export const bookingService = {
  createBookingIntoDB,
};
