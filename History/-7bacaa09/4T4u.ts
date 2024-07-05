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
  const result = await StudentModel.create(studentData)
  return result
}

//

const createStudentIntoDB = async (password: string, studentData: TStudent) => {
  // create a user object
  const userData: Partial<TUser> = {}

  //if password is not given , use deafult password
  userData.password = password || (config.default_password as string)

  //set student role
  userData.role = 'student'

  //set manually generated it
  userData.id = '2030100001'

  // create a user
  const newUser = await User.create(userData)

  //create a student
  if (Object.keys(newUser).length) {
    // set id , _id as user
    studentData.id = newUser.id
    studentData.user = newUser._id //reference _id

    const newStudent = await Student.create(studentData)
    return newStudent
  }
}

export const UserServices = {
  createStudentIntoDB,
}

//
export default {
  createStudentIntoDb,
}
