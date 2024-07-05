export type Tuser = {
  id: string
  password: string
  needsPasswordChange: boolean
  isDeleted: boolean
  role: 'Student' | 'Faculty' | 'Admin'
  ststus: 'in-proggress' | 'nlocked'
}
