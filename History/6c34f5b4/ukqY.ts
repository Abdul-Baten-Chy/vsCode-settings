import { Product } from '../products/product.model'
import { Torders } from './order.interface'
import { Order } from './orders.model'

const createOrderInDb = async (order: Torders) => {
  const { productId, quantity: orderQnty } = order
  const orderedProduct = await Product.find({ _id: productId })
  if (orderedProduct.inventory.quantity < orderQnty) return 'no product'
  console.log(orderedProduct.inventory.quantity)

  const result = await Order.create(order)
  return result
}
const getOrders = async (email?: any) => {
  let result
  if (email) {
    result = await Order.find({ email: email })
  } else {
    result = await Order.find()
  }
  return result
}
export const orderService = {
  createOrderInDb,
  getOrders,
}
