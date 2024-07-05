import { Request, Response } from 'express'
import validateOrder from './orders.validation'

const createOrder = async (req: Request, res: Response) => {
  const order = req.body
  const validetedOrder = validateOrder.parse(order)
}

export const orderController = {
  createOrder,
}
