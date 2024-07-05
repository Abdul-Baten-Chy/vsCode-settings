import { Request, Response } from 'express'
import { orderService } from './order.services'
import validateOrder from './orders.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const validetedOrder = validateOrder.parse(order)
    const result = await orderService.createOrderInDb(validetedOrder)
  } catch (error) {}
}

export const orderController = {
  createOrder,
}
