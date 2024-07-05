import { Schema } from 'mongoose'

export const orderSchema = new Schema({
  email: String,
  productId: String,
  price: Number,
  quantity: Number,
})
