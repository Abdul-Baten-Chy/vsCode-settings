import { Schema, model } from 'mongoose'
import {
  Gurdian,
  LocalGurdian,
  StudentName,
  Students,
} from './student.interface'

const nameSchema = new Schema<StudentName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
  midName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: [true, 'Last Name is required'],
    maxlength: [20, 'Name can not be more than 20 characters'],
  },
})

const gurdianSchema = new Schema<Gurdian>({
  fatherName: { type: String, required: true },
  fatherOccupation: { type: String, required: true },
  fatherContuct: { type: String, required: true },
  motherName: { type: String, required: true },
  motherOccupation: { type: String, required: true },
  motherContuct: { type: String, required: true },
})

const localGurdianSchema = new Schema<LocalGurdian>({
  name: { type: String, required: true },
  occupation: { type: String, required: true },
  contuctNo: { type: String, required: true },
  address: { type: String, required: true },
})

const studentSchema = new Schema<Students>({
  id: {
    id: {
      type: String,
      required: [true, 'ID is required'],
      unique: true,
    },
  },
  user: {
    type: Schema.Types.ObjectId,
    required: [true, 'User id is required'],
    unique: true,
    ref: 'User',
  },
  name: { type: nameSchema, required: [true, 'name is required'] },
  dob: { type: String, required: [true, 'DOB is required'] },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'gender is very much required'],
  },
  email: { type: String, required: [true, 'email is required'] },
  contuctNo: { type: String, required: true },
  emergencyContuct: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    required: true,
  },
  gurdian: { type: gurdianSchema, required: true },
  localGurdian: {
    type: localGurdianSchema,
    required: [true, 'local gurdian is needed'],
  },
  profileImage: { type: String, required: true },
})

export const StudentModel = model<Students>('Student', studentSchema)
