import { Car } from '../cars/cars.model';
import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBookingIntoDB = async (payload: Tbooking) => {
  const newBooking = await Booking.create(payload);

  if (newBooking) {
    await Car.findByIdAndUpdate(payload.car, { status: 'unavailable' });
  }
  await newBooking.populate('user car');
  return newBooking;
};
const getAllBooking = async (carId) => {
  return await Booking.findById(carId);
};
export const bookingService = {
  createBookingIntoDB,
  getAllBooking,
};
