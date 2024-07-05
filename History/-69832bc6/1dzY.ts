import { Schema } from 'mongoose'
import { StudentName } from './students/student.interface'

const nameSchema = new Schema<StudentName>({
  firstName: { type: String, required: true },
  midName: { type: String, required: true },
  lastName: { type: String, required: true },
})
