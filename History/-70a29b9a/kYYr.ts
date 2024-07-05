import { z } from 'zod'

// const validateOrder = z.object({ type: z.string(), value: z.string() })

const validateOrder = z.object({
  email: z.string(),
  productId: z.string(),
  price: z.number(),
  quantity: z.number(),
})

export default validateOrder
