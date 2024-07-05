import { z } from 'zod'

const variantObjSchema = z.object({ type: z.string(), value: z.string() })

const ProductValidated = z.object({
  name: z.string(),
  description: z.string(),
  price: z.number(),
  category: z.string(),
  tags: z.array(z.string()),
  variants: z.array(variantObjSchema),
  inventory: {
    quantity: Number,
    inStock: Boolean,
  },
})
