export type Tuser = {
  id: string
  password: string
  needsPasswordChange: boolean
  isDeleted: boolean
  role: 'student' | 'faculty' | 'admin'
  ststus: 'in-proggress' | 'nlocked'
}
