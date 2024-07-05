import { Schema, model } from 'mongoose'
import { Tproduct, Tvariant } from './product.interface'

const TvariantSchema = new Schema<Tvariant>({
  type: String,
  value: String,
})

const productSchema = new Schema<Tproduct>({
  name: { type: String, required: [true, 'Name is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  category: { type: String, required: [true, 'category is required'] },
  tags: [String],
  variants: { type: [TvariantSchema], required: [true, 'variant is required'] },
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})

export const Product = model<Tproduct>('Product', productSchema)
