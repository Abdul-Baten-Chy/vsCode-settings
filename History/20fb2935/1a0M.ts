import { Schema } from 'mongoose'
import { Tuser } from './user.interface'

const userSchema = new Schema<Tuser>({
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
    enum: ['Student', 'Faculty', 'Admin'],
    required: true,
  },
  ststus: {
    type: String,
    enum: ['in-proggress', 'blocked'],
  },
})
