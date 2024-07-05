import { Request, Response } from 'express'
import { orderService } from './order.services'
import validateOrder from './orders.validation'

const createOrder = async (req: Request, res: Response) => {
  try {
    const order = req.body
    const validetedOrder = validateOrder.parse(order)
    const result = await orderService.createOrderInDb(validetedOrder)
    res.status(200).json({
      success: true,
      message: 'Order created successfully!',
      data: result,
    })
  } catch (error) {
    res.status(200).json({
      success: false,
      message: 'Order creation fail!',
      data: error,
    })
  }
}

const getAllOrder = async (req: Request, res: Response) => {
  try {
    const { email } = req.query
    console.log(email)

    let result
    if (email) {
      result = await orderService.getOrders(email)
    } else {
      result = await orderService.getOrders()
    }

    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully!',
      data: result,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Orders fetched failed!',
      data: error,
    })
  }
}

export const orderController = {
  createOrder,
  getAllOrder,
}
