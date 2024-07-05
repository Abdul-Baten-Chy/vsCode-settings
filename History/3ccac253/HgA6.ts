import { Booking } from '../bookings/bookings.model';
import { Tcars } from './cars.interface';
import { Car } from './cars.model';

const createCarsIntoDB = async (payload: Tcars) => {
  return await Car.create(payload);
};

const getAllCarsFromDB = async () => {
  return await Car.find();
};

const getSingleCarsfromDB = async (id: string) => {
  return await Car.findById(id);
};

const updateCarIntoDB = async (id: string, payload: Partial<Tcars>) => {
  const { features, ...remaining } = payload;

  if (features && features.length) {
    return await Car.findByIdAndUpdate(
      id,
      { $addToSet: { features: features }, $set: remaining },
      { new: true }
    );
  } else {
    return await Car.findByIdAndUpdate(id, remaining, { new: true });
  }
};

const deleteAcarFromDB = async (id: string) => {
  return await Car.findByIdAndUpdate(id, { isDeleted: true }, { new: true });
};
const carReturn = async (payload) => {
  const { bookingId, endTime } = payload;

  const booking = await Booking.findById(bookingId);
  console.log(booking);
};
export const carServices = {
  createCarsIntoDB,
  getAllCarsFromDB,
  getSingleCarsfromDB,
  updateCarIntoDB,
  carReturn,
  deleteAcarFromDB,
};
