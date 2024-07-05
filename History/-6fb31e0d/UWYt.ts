import { Car } from '../cars/cars.model';
import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBookingIntoDB = async (payload: Tbooking) => {
  const newBooking = await Booking.create(payload);

  await Car.findByIdAndUpdate(payload.car, { status: 'unavailable' });
  await newBooking.populate('user car');
  return newBooking;
};

export const bookingService = {
  createBookingIntoDB,
};
