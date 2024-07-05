import { Car } from '../cars/cars.model';
import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBookingIntoDB = async (payload: Tbooking) => {
  const user = await User.findOne({ email: userEmail });
  const newBooking = await Booking.create(payload);

  if (newBooking) {
    await Car.findByIdAndUpdate(payload.car, { status: 'unavailable' });
  }
  await newBooking.populate('user car');
  return newBooking;
};
const getAllBooking = async (carId: string) => {
  return await Booking.findById(carId);
};
const getSingleBooking = async () => {
  return await Booking.find();
};
export const bookingService = {
  createBookingIntoDB,
  getAllBooking,
  getSingleBooking,
};
