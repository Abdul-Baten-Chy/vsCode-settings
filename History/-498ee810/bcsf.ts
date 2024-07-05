import { Types } from 'mongoose';

export type Tbooking = {
  date: Date;
  user: Types.ObjectId;
  car: Types.ObjectId;
  startTime: Date;
  endTime: Date;
  totalCost: number;
  isBooked: boolean;
};
