import { Schema, model } from 'mongoose'
import { Tproduct, Tvariant } from './product.interface'

const TvariantSchema = new Schema<Tvariant>({
  type: String,
  value: String,
})

const productSchema = new Schema<Tproduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  category: String,
  tags: [String],
  variants: [TvariantSchema],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})

export const Product = model<Tproduct>('Product', productSchema)
