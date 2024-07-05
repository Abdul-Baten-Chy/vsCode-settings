import { Product } from '../products/product.model'
import { Torders } from './order.interface'
import { Order } from './orders.model'

const createOrderInDb = async (order: Torders) => {
  const { productId, quantity: orderQnty } = order
  const orderedProduct = await Product.find({
    _id: productId,
    field: { $gte: orderQnty },
  })
  // if (orderedProduct.inventory.quantity < orderQnty) return 'no product'
  console.log(orderedProduct)
  if (orderedProduct.length > 0) {
    const result = await Order.create(order)
    return result
  } else {
    throw 'no product availlable'
  }
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
