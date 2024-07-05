import { Students } from './student.interface'
import { StudentModel } from './students.model'

const createStudentIntoDb = async (studentData: Students) => {
  const result = await StudentModel.create(studentData)
  return result
}
export default {
  createStudentController: createStudentIntoDb,
}
