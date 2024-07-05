import { Schema, model } from 'mongoose'
import { Torders } from './order.interface'

export const orderSchema = new Schema({
  email: { type: String, require: [true, 'email is require'] },
  productId: { type: String, require: [true, 'ProductId is require'] },
  price: { type: Number, require: [true, 'Price is require'] },
  quantity: { type: Number, require: [true, 'Quantity  is require'] },
})

export const Order = model<Torders>('Order', orderSchema)
