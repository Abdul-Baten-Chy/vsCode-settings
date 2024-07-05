import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import { orderRoute } from './app/orders/order.route'
import { productsRoute } from './app/products/product.routes'
const app: Application = express()

// midleware
app.use(express.json())
app.use(cors())

app.use('/api/products', productsRoute)
app.use('/api/orders', orderRoute)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

export default app
