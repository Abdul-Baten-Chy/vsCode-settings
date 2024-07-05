import { Schema } from "mongoose";
import { Tbooking } from "./booking.interface";

const bookingSchema= new Schema<Tbooking>({
    date: {
        type:Date,
        required:true,
    },
  user: {
    type:Schema.Types.ObjectId,
    ref:"User",
    required:true,
},
  car: {
    type:Schema.Types.ObjectId,
    ref:"Car",
    required:true,
},
  startTime: {
    type:Date,
    required:true,
},
  endTime: {
    type:Date,
    required:true,
},
  totalCost: {
    type:Number,
    required:true,
},
  isBooked: Boolean;
})