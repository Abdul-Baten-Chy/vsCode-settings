import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { studentRouter } from './app/modules/students/student.router'
const app: Application = express()

//parser
app.use(express.json())

app.use(cors())

app.use('/api/v1/student', studentRouter)

app.get('/', (req: Request, res: Response) => {
  const a = 7

  res.send('foo barrrr')
})

export default app
