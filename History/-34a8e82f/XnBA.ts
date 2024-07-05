import { Schema, model } from 'mongoose';
import { Tbooking } from './booking.interface';

const bookingSchema = new Schema<Tbooking>({
  date: {
    type: Date,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  car: {
    type: Schema.Types.ObjectId,
    ref: 'Car',
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    default: null,
  },
  totalCost: {
    type: Number,
    default: 0,
  },
  isBooked: Boolean,
});

export const Booking = model<Tbooking>('Booking', bookingSchema);
