import { Types } from 'mongoose'

export type StudentName = {
  firstName: string
  midName: string
  lastName: string
}

export type Gurdian = {
  fatherName: string
  fatherOccupation: string
  fatherContuct: string
  motherName: string
  motherOccupation: string
  motherContuct: string
}

export type LocalGurdian = {
  name: string
  occupation: string
  contuctNo: string
  address: string
}

export type Students = {
  id: string
  user: Types.ObjectId
  password: String
  name: StudentName
  dob: string
  gender: 'male' | 'female'
  email: string
  contuctNo: string
  emergencyContuct: string
  presentAddress: string
  permanentAddress: string
  bloodGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  gurdian: Gurdian
  localGurdian: LocalGurdian

  profileImage?: string

  isDeleted: boolean
}

export type TStudent = {
  id: string
  user: Types.ObjectId
  password: string
  name: TUserName
  gender: 'male' | 'female' | 'other'
  dateOfBirth?: string
  email: string
  contactNo: string
  emergencyContactNo: string
  bloogGroup?: 'A+' | 'A-' | 'B+' | 'B-' | 'AB+' | 'AB-' | 'O+' | 'O-'
  presentAddress: string
  permanentAddress: string
  guardian: TGuardian
  localGuardian: TLocalGuardian
  profileImg?: string
  isDeleted: boolean
}
