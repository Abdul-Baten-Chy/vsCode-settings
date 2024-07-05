import { Schema, model } from 'mongoose'
import { Tuser } from './user.interface'

const userSchema = new Schema<Tuser>(
  {
    id: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['student', 'faculty', 'admin'],
      required: true,
    },
    ststus: {
      type: String,
      enum: ['in-proggress', 'blocked'],
      default: 'in-proggress',
    },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

export const User = model<Tuser>('User', userSchema)
