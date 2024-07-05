import { Schema, model } from 'mongoose';
import { Tcars } from './cars.interface';

const carSchema = new Schema<Tcars>(
  {
    name: {
      type: String,
      required: [true, 'Car name is required'],
    },
    description: {
      type: String,
      required: [true, 'Description name is required'],
    },
    color: {
      type: String,
      required: [true, 'color name is required'],
    },
    isElectric: {
      type: Boolean,
      required: [true, 'isElectric value is required'],
    },
    status: {
      type: String,
      enum: ['available', 'unavailabel'],
      required: [true, 'status  is required'],
      default: 'available',
    },
    features: {
      type: [String],
      required: [true, 'Feature name is required'],
    },
    pricePerHour: {
      type: Number,
      required: [true, 'pricePerHour  is required'],
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    __v: 0,
  }
);

export const Car = model<Tcars>('Car', carSchema);
