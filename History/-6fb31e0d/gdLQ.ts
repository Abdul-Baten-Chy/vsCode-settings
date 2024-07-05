import { Car } from '../cars/cars.model';
import { User } from '../user/user.model';
import { Tbooking } from './booking.interface';
import { Booking } from './bookings.model';

const createBookingIntoDB = async (payload: Tbooking, userEmail: string) => {
  const user = await User.findOne({ email: userEmail });
  if (user) {
    payload.user = user?._id;
  }

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
const getSingleBooking = async (userEmail: string) => {
  return await Booking.find({ email: userEmail });
};
export const bookingService = {
  createBookingIntoDB,
  getAllBooking,
  getSingleBooking,
};
