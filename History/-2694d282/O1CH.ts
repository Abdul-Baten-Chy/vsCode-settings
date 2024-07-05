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
  isActive: 'active' | 'block'
  profileImage?: string
}
