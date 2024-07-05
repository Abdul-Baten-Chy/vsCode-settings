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
  id: String,
  name: nameSchema,
  dob: { type: String, required: true },
  gender: { required: true, enum: ['male', 'female'] },
  email: { type: String, required: true },
  contuctNo: { type: String, required: true },
  emergencyContuct: { type: String, required: true },
  presentAddress: { type: String, required: true },
  permanentAddress: { type: String, required: true },
  bloodGroup: {
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  gurdian: gurdianSchema,
  localGurdian: localGurdianSchema,
  isActive: { enum: ['active', 'block'], required: true },
  profileImage: { type: String, required: true },
})

export const StudentModel = model<Students>('Student', studentSchema)
