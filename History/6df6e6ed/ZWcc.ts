import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { orderRoute } from './app/orders/order.route'
import { productsRoute } from './app/products/product.routes'
const app: Application = express()

// midleware
app.use(express.json())
app.use(cors())

// route
app.use('/api/products', productsRoute)
app.use('/api/orders', orderRoute)

// sending error message for mis-matching route

// root route
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.use((req: Request, res: Response) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
  })
})
export default app
