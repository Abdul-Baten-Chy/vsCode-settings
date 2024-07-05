import { Schema, model } from 'mongoose'
import { Tinventory, Tproduct, Tvariant } from './product.interface'

export const TvariantSchema = new Schema<Tvariant>({
  type: String,
  value: String,
})

export const inventorySchema = new Schema<Tinventory>({
  quantity: {type:Number, required:[true,"quantity is required"]},
  inStock: {type:Boolean, required:[true, "in stock is required"]}
})

const productSchema = new Schema<Tproduct>({
  name: { type: String, required: [true, 'Name is required'] },
  description: { type: String, required: [true, 'Description is required'] },
  price: { type: Number, required: [true, 'price is required'] },
  category: { type: String, required: [true, 'category is required'] },
  tags: { type: [String], required: [true, 'tags is required'] },
  variants: { type: [TvariantSchema], required: [true, 'variant is required'] },
  inventory: 
    type: inventorySchema,
    required: [true, 'inventory required'],
  },
})

export const Product = model<Tproduct>('Product', productSchema)
