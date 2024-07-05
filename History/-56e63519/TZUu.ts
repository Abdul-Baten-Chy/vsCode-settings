import { z } from 'zod';

const validateUser = z.object({
  name: z.string(),
  email: z.string().email(),
  role: z.enum(['user', 'admin']),
  password: z.string(),
  phone: z.string(),
  address: z.string(),
});
