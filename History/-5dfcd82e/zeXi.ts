import { Schema, model } from 'mongoose'
import { Torders } from './order.interface'

export const orderSchema = new Schema({
  email: String,
  productId: String,
  price: Number,
  quantity: Number,
})

export const Order = model<Torders>('Order', orderSchema)
