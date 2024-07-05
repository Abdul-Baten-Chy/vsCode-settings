import { Schema, model } from 'mongoose'
import {
  Gurdian,
  LocalGurdian,
  StudentName,
  Students,
} from './students/student.interface'

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
  name: nameSchema,
  dob: { type: String, required: true },
  gender: {
    type: String,
    enum: ['male', 'female'],
    required: true,
    message: 'gender is required',
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
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  isActive: { type: String, enum: ['active', 'block'] },
  profileImage: { type: String, required: true },
})

export const StudentModel = model<Students>('Student', studentSchema)
