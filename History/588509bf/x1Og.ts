import mongoose, { Schema } from 'mongoose'
import { Tproduct, Tvariant } from './product.interface'

const TvariantSchema = new Schema<Tvariant>({
  type: String,
  value: String,
})

const productSchema = new Schema<Tproduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [TvariantSchema],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})

export const Product = mongoose.model('Product', productSchema)
