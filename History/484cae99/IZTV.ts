import { z } from 'zod'

const ProductValidated = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(z.object()),
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})
