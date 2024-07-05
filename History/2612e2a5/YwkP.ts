import { StudentModel } from '../students.model'
import { Students } from './student.interface'

const createStudentController = (studentData: Students) => {
  StudentModel.create(studentData)
}
export default {
  createStudentController,
}
