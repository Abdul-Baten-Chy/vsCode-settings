import { z } from 'zod'
const userSchemaValidation = z.object({
  password: z
    .string({
      invalid_type_error: 'password must be string ',
    })
    .max(20, { message: 'password must not be 20 character ' })
    .optional(),
})

export const userValidation = {
  userSchemaValidation,
}
