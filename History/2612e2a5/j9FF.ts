import { StudentModel } from './students.model'

const getAllStudentFromDb = async () => {
  const result = await StudentModel.find()
  return result
}

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.aggregate([{ $match: { id } }])
  return result
}

const deleteStudentFromDB = async (id: string) => {
  const result = await StudentModel.updateOne({ id }, { isDeleted: true })
  return result
}

export const StudentServices = {
  getAllStudentFromDb,
  getSingleStudentFromDB,
  deleteStudentFromDB,
}
