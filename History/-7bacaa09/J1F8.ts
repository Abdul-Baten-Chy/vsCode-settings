import { Students } from '../students/student.interface'
import { StudentModel } from '../students/students.model'

const createStudentIntoDb = async (password, studentData: Students) => {
  const result = await StudentModel.create(studentData)
  return result
}
export default {
  createStudentIntoDb,
}
