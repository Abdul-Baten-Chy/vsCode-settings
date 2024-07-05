import { Schema } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema= new Schema<Tbooking>({
    date: Date;
  user: Types.ObjectId;
  car: Types.ObjectId;
  startTime: Date;
  endTime: Date;
  totalCost: number;
  isBooked: boolean;
})