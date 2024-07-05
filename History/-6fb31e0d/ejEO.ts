import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBookingIntoDB = async (payload: Tbooking) => {
  const newBooking = await Booking.create(payload);
  await newBooking.populate('user car');
  return newBooking;
};

export const bookingService = {
  createBookingIntoDB,
};
