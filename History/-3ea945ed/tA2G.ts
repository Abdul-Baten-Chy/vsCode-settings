export type Tuser = {
  id: string
  password: string
  needsPassword: boolean
  isDleted: boolean
  role: 'Student' | 'Faculty' | 'Admin'
  ststus: 'in-proggress' | 'nlocked'
}
