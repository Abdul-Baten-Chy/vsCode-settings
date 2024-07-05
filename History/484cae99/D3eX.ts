import { z } from 'zod'

const ProductValidated = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: [String],
  variants: [TvariantSchema],
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})
