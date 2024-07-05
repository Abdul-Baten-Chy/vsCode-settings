import { Product } from '../products/product.model'
import { Torders } from './order.interface'
import { Order } from './orders.model'

const createOrderInDb = async (order: Torders) => {
  const { productId, quantity: orderQnty } = order
  // finding the ordered product from product collection to caompare it quantit
  // with order quantity to be ensure that enough product is available
  const orderedProduct = await Product.find({ _id: productId })
  if (orderedProduct[0].inventory.quantity >= orderQnty) {
    const result = await Order.create(order)

    // find the ordered product from product collection and reduce its inventory quantity
    const updatedProducQuantity = await Product.findOneAndUpdate(
      { _id: productId },
      { $inc: { 'inventory.quantity': -orderQnty } },
      { new: true }
    )
    // checking the product quantity and toggleing the inStock property based on
    // the product quantity
    if (updatedProducQuantity?.inventory.quantity === 0) {
      await Product.findOneAndUpdate(
        { _id: productId },
        { $set: { 'inventory.inStock': false } }
      )
    }

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
