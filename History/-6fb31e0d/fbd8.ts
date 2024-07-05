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
const getMyBookingFromDb = async (userEmail: string) => {
  console.log({ userEmail });
  const user = await User.find({ email: userEmail });

  return await Booking.findById(user._id);
};
export const bookingService = {
  createBookingIntoDB,
  getAllBooking,
  getMyBookingFromDb,
};
