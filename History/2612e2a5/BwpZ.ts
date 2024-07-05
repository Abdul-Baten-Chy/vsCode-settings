import { StudentModel } from '../students.model'
import { Students } from './student.interface'

const createStudentController = async (studentData: Students) => {
  const result = await StudentModel.create(studentData)
  return result
}
export default {
  createStudentController,
}
