import { Students } from './student.interface'
import { StudentModel } from './students.model'

const createStudentController = async (studentData: Students) => {
  const result = await StudentModel.create(studentData)
  return result
}
export default {
  createStudentController,
}
