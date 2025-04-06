import { z } from 'zod'

const userStatusSchema = z.union([
  z.literal('active'),
  z.literal('inactive'),
  z.literal('invited'),
  z.literal('suspended'),
])

const userRoleSchema = z.union([
  z.literal('softwareEngineer'),
  z.literal('admin'),
  z.literal('labTechnician'),
  z.literal('doctor'),
  z.literal('nurse'),
  z.literal('biomedicalEngineer'),
  z.literal('pharmacist'),
  z.literal('receptionist'),
])

const userSchema = z.object({
  id: z.string(),
  firstName: z.string(),
  lastName: z.string(),
  username: z.string(),
  email: z.string(),
  phoneNumber: z.string(),
  status: userStatusSchema,
  role: userRoleSchema,
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})
export type User = z.infer<typeof userSchema>

export const userListSchema = z.array(userSchema)
