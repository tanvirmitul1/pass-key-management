
import { z } from 'zod';

export const userSchema = z.object({
  id: z.string().uuid(),
  email: z.string().email(),
  name: z.string().min(2).max(100),
  password: z.string().min(8),
  createdAt: z.date(),
  updatedAt: z.date()
});

export const createUserSchema = userSchema.omit({ 
  id: true,
  createdAt: true, 
  updatedAt: true 
});

export const updateUserSchema = createUserSchema.partial();

export type User = z.infer<typeof userSchema>;
export type CreateUserInput = z.infer<typeof createUserSchema>;
export type UpdateUserInput = z.infer<typeof updateUserSchema>;