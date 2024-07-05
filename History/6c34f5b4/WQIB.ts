import { Torders } from './order.interface'
import { Order } from './orders.model'

const createOrderInDb = async (order: Torders) => {
  const result = await Order.create(order)
  return result
}
const getOrders = async (email?: string) => {
  let result
  if (email) {
    result = await Order.find({ email })
  } else {
    result = await Order.find()
  }
  return result
}
export const orderService = {
  createOrderInDb,
  getOrders,
}
