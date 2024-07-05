import { z } from 'zod';

export const carValidation = z.object({
  body: z.object({
    name: z.string(),
    description: z.string(),
    color: z.string(),
    isElectric: z.boolean(),
    status: z.enum(['available', 'unavailabel']),
    features: z.string().array(),
    pricePerHour: z.number(),
  }),
});
