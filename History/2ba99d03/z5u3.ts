import { Schema, model } from 'mongoose'
import {
  Gurdian,
  LocalGurdian,
  StudentName,
  Students,
} from './student.interface'

const nameSchema = new Schema<StudentName>({
  firstName: { type: String, required: true },
  midName: String,
  lastName: { type: String, required: true },
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
  id: { type: String, unique: true },
  name: { type: nameSchema, required: true },
  dob: { type: String, required: true },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: [true, 'gender is very much required'],
  },
  email: { type: String, required: true },
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
  isActive: {
    type: String,
    enum: { values: ['active', 'block'], message: '{VALUE} is incorect value' },
  },
  profileImage: { type: String, required: true },
})

export const StudentModel = model<Students>('Student', studentSchema)
