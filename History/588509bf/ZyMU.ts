import { Schema, model } from 'mongoose'
import { Tproduct, Tvariant } from './product.interface'

export const TvariantSchema = new Schema<Tvariant>({
  type: String,
  value: String,
})

export const Tinventory = new Schema<Tvariant>({
  type: String,
  value: String,
})

const productSchema = new Schema<Tproduct>({
  name: { type: String, required: [true, 'Name is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  category: { type: String, required: [true, 'category is required'] },
  tags: { type: [String], required: [true, 'tags is required'] },
  variants: { type: [TvariantSchema], required: [true, 'variant is required'] },
  inventory: {
    type: Tinventory,
    required: [true, 'inventory required'],
  },
})

export const Product = model<Tproduct>('Product', productSchema)
