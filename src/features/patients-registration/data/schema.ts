import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const patientSchema = z.object({
  shortId: z.string(),
  fullName: z.string(),
  contact: z.string(),
  gender: z.enum(['male', 'female']),
  age: z.number(),
  email: z.string(),
  status: z.enum(['active', 'offline']),
})

export type Patient = z.infer<typeof patientSchema>

// export const doctorSchema = z.object({
//   shortId: z.string(),
//   first_name: z.string(),
//   last_name: z.string(),
//   user_type: z.string(),
//   user_appreviation: z.string(),
//   contact: z.string(),
//   gender: z.string(),
//   age: z.number(),
//   status: z.string(),
// })
//
// export type Doctor = z.infer<typeof doctorSchema>
