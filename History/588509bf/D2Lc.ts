import mongoose, { Schema } from 'mongoose'
import { Tproduct } from './product.interface'

const productSchema = new Schema<Tproduct>({
  name: String,
  description: String,
  price: Number,
  category: String,
  tags: [String],
  variants: [
    {
      type: String,
      value: String,
    },
  ],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})

const Product = mongoose.model('Product', productSchema)
