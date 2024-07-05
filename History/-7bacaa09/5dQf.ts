import config from '../../../config'
import { Students } from '../students/student.interface'
import { StudentModel } from '../students/students.model'
import { Tuser } from './user.interface'
import { User } from './user.model'

const createStudentIntoDb = async (password: string, studentData: Students) => {
  const userData: Partial<Tuser> = {}
  userData.password = password || (config.default_password as string)
  userData.role = 'student'
  userData.id = '2030100001'
  const newUser = await User.create(userData)
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id
    studentData.user = newUser._id //reference _id

    const newStudent = await StudentModel.create(studentData)
    return newStudent
  }
}

export const UserServices = {
  createStudentIntoDb,
}
