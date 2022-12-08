import { z } from 'zod';

export const mailSchema = z.object({
  name: z.string().min(3).max(50),
  email: z.string().email(),
  subject: z.string().min(3).max(60),
  body: z.string().min(10).max(500),
});

export type TMail = z.infer<typeof mailSchema>;
