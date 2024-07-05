import { Schema } from 'mongoose'
import { Gurdian, StudentName } from './students/student.interface'

const nameSchema = new Schema<StudentName>({
  firstName: { type: String, required: true },
  midName: { type: String, required: true },
  lastName: { type: String, required: true },
})

const gurdianSchema =  new Schema<Gurdian>({
    fatherName: { type: String, required: true }
    fatherOccupation: { type: String, required: true }
    fatherContuct: { type: String, required: true }
    motherName: { type: String, required: true }
    motherOccupation:{ type: String, required: true }
    motherContuct: { type: String, required: true }
})
