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
const carReturn = async (payload: { bookingId: string; endTime: string }) => {
  const bookingId = payload.bookingId;
  const endTime = payload.endTime;

  const booking = await Booking.findById(bookingId);
  const startTime = booking?.startTime;
  const startDate = booking?.date;
  const startPart: string[] = startTime?.split(':');
  const endTimePart: string[] = endTime.split(':');
  const startDateObj: Date = new Date(startDate);
  const startDateTime: Date = new Date(startDateObj);
  startDateTime.setHours(parseInt(startPart[0], 10));
  startDateTime.setMinutes(parseInt(startPart[1], 10));
  startDateTime.setSeconds(0);
  const endDateTime: Date = new Date(startDateObj);
  endDateTime.setHours(parseInt(endTimePart[0], 10));
  endDateTime.setMinutes(parseInt(endTimePart[1], 10));
  endDateTime.setSeconds(0);
  const timeDifferenceMs: number =
    endDateTime.getTime() - startDateTime.getTime();
  const timeDifferenceMinutes: number = (
    timeDifferenceMs /
    (1000 * 60 * 60)
  ).toFixed(2);

  console.log({ timeDifferenceMinutes });
};

export const carServices = {
  createCarsIntoDB,
  getAllCarsFromDB,
  getSingleCarsfromDB,
  updateCarIntoDB,
  carReturn,
  deleteAcarFromDB,
};
