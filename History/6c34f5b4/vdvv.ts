import { Torders } from './order.interface'
import { Order } from './orders.model'

const createOrderInDb = async (order: Torders) => {
  const result = await Order.create(order)
  return result
}

export const orderService = {
  createOrderInDb,
}
