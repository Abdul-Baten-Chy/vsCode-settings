import { Types } from 'mongoose';

export type Tbooking = {
  date: Date;
  user: string;
  car: Types.ObjectId;
  startTime: string;
  endTime: string;
  totalCost: number;
};
