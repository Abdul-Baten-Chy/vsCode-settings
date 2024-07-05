import { Product } from '../products/product.model'
import { Torders } from './order.interface'
import { Order } from './orders.model'

const createOrderInDb = async (order: Torders) => {
  const { productId, quantity: orderQnty } = order
  console.log(productId, orderQnty)

  const orderedProduct = await Product.find({ _id: productId })
  if (orderedProduct[0].inventory.quantity >= orderQnty) {
    const result = await Order.create(order)
    const updatedProducQuantity = await Product.findOneAndUpdate({ _id: productId },
    //   { $inc: { inventory.quantity: -2 } })
    return result
    
  } else {
    throw 'Insufficient quantity available in inventory'
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
