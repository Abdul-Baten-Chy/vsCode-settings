import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import globalErrorHandler from './app/middleware/globalErrorHandler'
import notFoudRouteHandler from './app/middleware/notFoundHandler'
import { studentRouter } from './app/modules/students/student.router'
const app: Application = express()

//parser
app.use(express.json())

app.use(cors())

// app.use('/api/v1/student', studentRouter)
app.use('/api/v1', studentRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('foo barrrr')
})
app.use(globalErrorHandler)
app.use(notFoudRouteHandler)
export default app
